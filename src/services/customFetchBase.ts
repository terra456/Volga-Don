import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { logout, setRefresh } from '../store/authSlice';
import { RootState } from '../store/store';
import { BASE_URL } from '../utils/variables';
import { AuthResponse, RefreshRequest } from '../types';

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  mode: 'cors',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.acsessToken || undefined;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            // credentials: 'include',
            url: '/auth/login/refresh/',
            method: 'POST',
            body: {
              refresh_token: localStorage.getItem('refreshToken'),
            },
          },
          api,
          extraOptions,
        );
        console.log(refreshResult);
        if (refreshResult.data) {
          // Retry the initial query
          api.dispatch(setRefresh(refreshResult.data as AuthResponse));
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
          window.location.href = '/admin/';
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginRequest, RefreshRequest, UserDTO } from '../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://cv08121-django-53po4.tw1.ru/',
    mode: 'cors',
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login/',
        method: 'post',
        body: credentials,
      }),
      transformResponse: (returnValue: AuthResponse) => {
        // `meta` here contains our added `requestId` & `timestamp`, as well as
        // `request` & `response` from fetchBaseQuery's meta object.
        // These properties can be used to transform the response as desired.
        if (returnValue.access) {
          localStorage.setItem('accessToken', returnValue.access);
        }
        return returnValue;
      },
    }),
    refresh: builder.mutation<AuthResponse, RefreshRequest>({
      query: (credentials) => ({
        url: 'auth/login/refresh/',
        method: 'post',
        body: credentials,
      }),
      transformResponse: (returnValue: AuthResponse) => {
        if (returnValue.access) {
          localStorage.setItem('accessToken', returnValue.access);
        }
        return returnValue;
      },
    }),
    signup: builder.mutation<UserDTO, UserDTO>({
      query: (credentials) => ({
        url: 'auth/register/',
        method: 'post',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation, useSignupMutation } = authApi;

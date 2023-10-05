import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { User, UserDTO, UserPassword } from '../types';
import { BASE_URL } from '../utils/variables';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.acsessToken || undefined;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    updateUsername: builder.mutation<{ username: string }, { username: string }>({
      query: (credentials) => ({
        url: 'auth/update_username/',
        method: 'put',
        body: credentials,
      }),
    }),
    changePassword: builder.mutation<UserPassword, UserPassword>({
      query: (credentials) => ({
        url: 'auth/change_password/',
        method: 'put',
        body: credentials,
      }),
    }),
    getAllUsers: builder.query<User[], undefined>({
      query: () => ({
        url: 'auth/users/',
        method: 'get',
      }),
      providesTags: ['User'],
    }),
    getUser: builder.query<User, string>({
      query: (id) => ({
        url: `auth/users/${id}`,
        method: 'get',
      }),
    }),
    addUser: builder.mutation<User, UserDTO>({
      query: (credentials) => ({
        url: `auth/register/`,
        method: 'post',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<User, number>({
      query: (id) => ({
        url: `auth/users/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useUpdateUsernameMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} = userApi;

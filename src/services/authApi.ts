import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { Article, ArticleDTO, LoginRequest, UserResponse } from '../types';
import { key } from 'localforage';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://cv08121-django-53po4.tw1.ru/',
    mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.acsessToken || undefined;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth', 'Article'],
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login/',
        method: 'post',
        body: credentials,
      }),
    }),
    addArticle: builder.mutation<Article, FormData>({
      query: (credentials) => ({
        url: 'articles/admin/list/',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data; boundary=---' },
        body: credentials,
      }),
      invalidatesTags: ['Article'],
    }),
    updateArticle: builder.mutation<Article, [FormData, string]>({
      query: ([credentials, id]) => ({
        url: `articles/admin/${id}`,
        method: 'put',
        headers: { 'content-type': 'multipart/form-data; boundary=---' },
        body: credentials,
      }),
      invalidatesTags: ['Article'],
    }),
    deleteArticle: builder.mutation<Article, string>({
      query: (id) => ({
        url: `articles/admin/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});

export const { useLoginMutation, useAddArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation } = authApi;

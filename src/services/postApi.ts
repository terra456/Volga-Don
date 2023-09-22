import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { Article, ArticleDTO, LoginRequest, Product, UserResponse } from '../types';
import { key } from 'localforage';

export const postApi = createApi({
  reducerPath: 'postApi',
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
  refetchOnMountOrArgChange: true,
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getArticle: builder.query<Article, string>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `articles/admin/${id}` }),
      providesTags: ['Article'],
    }),
    getAllArticles: builder.query<Article[], undefined>({
      query: () => ({ url: 'articles/admin/list/' }),
      providesTags: ['Article'],
    }),
    getAllProducts: builder.query<Product[], undefined>({
      query: () => ({ url: 'products/admin/list/' }),
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => ({ url: `products/admin/${id}` }),
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

export const {
  useGetArticleQuery,
  useGetAllArticlesQuery,
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = postApi;

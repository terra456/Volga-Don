// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Article, LoginRequest, Product, UserResponse } from '../types';

export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://cv08121-django-53po4.tw1.ru/',
  }),
  tagTypes: ['Article', 'Product'],
  endpoints: (builder) => ({
    getArticle: builder.query<Article, string>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `articles/${id}` }),
      providesTags: ['Article'],
    }),
    getAllArticles: builder.query<Article[], number>({
      query: (_page = 0) => ({ url: 'articles/' }),
      providesTags: ['Article'],
    }),
    getAllProducts: builder.query<Product[], number>({
      query: (_page = 0) => ({ url: 'products/' }),
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => ({ url: `products/${id}` }),
    }),
    getUser: builder.query<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useGetArticleQuery, useGetAllArticlesQuery, useGetAllProductsQuery, useGetProductQuery } = getApi;

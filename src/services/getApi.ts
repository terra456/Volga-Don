// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Article, LoginRequest, Product, User } from '../types';

export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://cv08121-django-53po4.tw1.ru/',
    mode: 'cors',
  }),
  tagTypes: ['Article', 'Product'],
  endpoints: (builder) => ({
    getArticle: builder.query<Article, string>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `articles/${id}` }),
      providesTags: ['Article'],
    }),
    getAllArticles: builder.query<Article[], undefined>({
      query: () => ({ url: 'articles/' }),
      providesTags: ['Article'],
    }),
    getAllProducts: builder.query<Product[], undefined>({
      query: () => ({ url: 'products/' }),
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => ({ url: `products/${id}` }),
    }),
    getUser: builder.query<User, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useGetArticleQuery, useGetAllArticlesQuery, useGetAllProductsQuery, useGetProductQuery } = getApi;

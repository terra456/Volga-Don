// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Article, Product } from '../types';

const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://cv08121-django-53po4.tw1.ru/',
  }),
  tagTypes: ['Article', 'Product'],
  endpoints: (builder) => ({
    getArticle: builder.query<Article, number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `article/${id}` }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Article }, meta, arg) => response.data,
      // // Pick out errors and prevent nested properties in a hook or selector
      // transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
      // providesTags: (result, error, id) => [{ type: 'Article', id }],
      // // The 2nd parameter is the destructured `QueryLifecycleApi`
      // async onQueryStarted(
      //   arg,
      //   { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData },
      // ) {},
      // // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      // async onCacheEntryAdded(
      //   arg,
      //   { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData },
      // ) {},
    }),
    getAllArticles: builder.query<Article[], number>({
      query: (_page = 0) => ({ url: 'articles/' }),
    }),
    getAllProducts: builder.query<Product[], number>({
      query: (_page = 0) => ({ url: 'products/' }),
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export const { useGetArticleQuery, useGetAllArticlesQuery, useGetAllProductsQuery, useGetProductQuery } = getApi;
export default getApi;

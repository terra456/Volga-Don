import { createApi } from '@reduxjs/toolkit/query/react';
import { Article, Categorie, CategorieDTO, Product } from '../types';
import customFetchBase from './customFetchBase';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: customFetchBase,
  refetchOnMountOrArgChange: true,
  tagTypes: ['Article', 'Categorie', 'Product'],
  endpoints: (builder) => ({
    getArticle: builder.query<Article, string>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `articles/admin/${id}/` }),
      providesTags: ['Article'],
    }),
    getAllArticles: builder.query<Article[], undefined>({
      query: () => ({ url: 'articles/admin/' }),
      providesTags: ['Article'],
    }),
    addArticle: builder.mutation<Article, FormData>({
      query: (credentials) => ({
        url: 'articles/admin/',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data; boundary=---' },
        body: credentials,
      }),
      invalidatesTags: ['Article'],
    }),
    updateArticle: builder.mutation<Article, [FormData, string]>({
      query: ([credentials, id]) => ({
        url: `articles/admin/${id}/`,
        method: 'put',
        headers: { 'content-type': 'multipart/form-data; boundary=---' },
        body: credentials,
      }),
      invalidatesTags: ['Article'],
    }),
    deleteArticle: builder.mutation<Article, string>({
      query: (id) => ({
        url: `articles/admin/${id}/`,
        method: 'delete',
      }),
      invalidatesTags: ['Article'],
    }),
    getAllProducts: builder.query<Product[], undefined>({
      query: () => ({ url: 'products/admin/list/' }),
      providesTags: ['Product'],
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => ({ url: `products/admin/${id}/` }),
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation<Product, FormData>({
      query: (credentials) => ({
        url: 'products/admin/add/',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data; boundary=---' },
        body: credentials,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation<Product, [FormData, string]>({
      query: ([credentials, id]) => ({
        url: `products/admin/${id}/`,
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: credentials,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<Product, string>({
      query: (id) => ({
        url: `products/admin/${id}/`,
        method: 'delete',
      }),
      invalidatesTags: ['Product'],
    }),
    getAllCategories: builder.query<Categorie[], undefined>({
      query: () => ({ url: 'products/admin/categories/' }),
      providesTags: ['Categorie'],
    }),
    getCategorie: builder.query<Categorie, number>({
      query: (id) => ({ url: `products/admin/categories/${id}/` }),
      providesTags: ['Categorie'],
    }),
    postCategorie: builder.mutation<Categorie, CategorieDTO>({
      query: (credentials) => ({ url: `products/admin/categories/`, method: 'post', body: credentials }),
      invalidatesTags: ['Categorie'],
    }),
    putCategorie: builder.mutation<Categorie, [CategorieDTO, number]>({
      query: ([credentials, id]) => ({ url: `products/admin/categories/${id}/`, method: 'put', body: credentials }),
      invalidatesTags: ['Categorie'],
    }),
    patchCategorie: builder.mutation<Categorie, [CategorieDTO, number]>({
      query: ([credentials, id]) => ({ url: `products/admin/categories/${id}/`, method: 'patch', body: credentials }),
      invalidatesTags: ['Categorie'],
    }),
    deleteCategorie: builder.mutation<Categorie, number>({
      query: (id) => ({ url: `products/admin/categories/${id}/`, method: 'delete' }),
      invalidatesTags: ['Categorie'],
    }),
  }),
});

export const {
  useGetArticleQuery,
  useGetAllArticlesQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllCategoriesQuery,
  useGetCategorieQuery,
  usePostCategorieMutation,
  usePutCategorieMutation,
  usePatchCategorieMutation,
  useDeleteCategorieMutation,
} = postApi;

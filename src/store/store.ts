import { configureStore } from '@reduxjs/toolkit';
// import pageReducer from './pageSlice';
import { getApi } from '../services/getApi';
import { postApi } from '../services/postApi';
import authSlice from './authSlice';
import { authApi } from '../services/authApi';

export const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware, postApi.middleware, authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

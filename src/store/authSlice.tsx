import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { AuthResponse } from '../types';

type AuthState = {
  // username: string | null;
  // acsessToken: string | null;
  // refreshToken: string | null;
  userInfo: { username: string | null }; // for user object
  acsessToken: string | null; // for storing the JWT
  refreshToken: string | null;
};

const acsessToken = localStorage.getItem('acsessToken') ? localStorage.getItem('acsessToken') : null;
const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;

const initialState: AuthState = {
  userInfo: { username: acsessToken ? 'admin' : null }, // for user object
  acsessToken, // for storing the JWT
  refreshToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('acsessToken');
      localStorage.removeItem('refreshToken');
      state.userInfo = { username: null };
      state.acsessToken = null;
      state.refreshToken = null;
    },
    setCredentials: (state, { payload: { userInfo, acsessToken, refreshToken } }: PayloadAction<AuthState>) => {
      state.userInfo = userInfo;
      state.acsessToken = acsessToken;
      state.refreshToken = refreshToken;
    },
    setRefresh: (state, { payload: { access, refresh } }: PayloadAction<AuthResponse>) => {
      localStorage.addItem('acsessToken', access);
      localStorage.addItem('refreshToken', refresh);
      state.acsessToken = access;
      state.refreshToken = refresh;
    },
  },
});

export const { logout, setCredentials, setRefresh } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type AuthState = {
  // username: string | null;
  // acsessToken: string | null;
  // refreshToken: string | null;
  userInfo: { username: string | null }; // for user object
  acsessToken: string | null; // for storing the JWT
  refreshToken: string | null;
};

const acsessToken = localStorage.getItem('acsessToken') ? localStorage.getItem('acsessToken') : null;

const initialState: AuthState = {
  userInfo: { username: null }, // for user object
  acsessToken, // for storing the JWT
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = { username: null };
      state.acsessToken = null;
      state.refreshToken = null;
    },
    setCredentials: (state, { payload: { userInfo, acsessToken, refreshToken } }: PayloadAction<AuthState>) => {
      state.userInfo = userInfo;
      state.acsessToken = acsessToken;
      state.refreshToken = refreshToken;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type AuthState = {
  username: string | null;
  acsessToken: string | null;
  refreshToken: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { username: null, acsessToken: null, refreshToken: null } as AuthState,
  reducers: {
    setCredentials: (state, { payload: { username, acsessToken, refreshToken } }: PayloadAction<AuthState>) => {
      state.username = username;
      state.acsessToken = acsessToken;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.username;

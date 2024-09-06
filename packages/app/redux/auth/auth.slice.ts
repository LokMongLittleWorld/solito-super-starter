import { createSlice } from '@reduxjs/toolkit';
import * as asyncFunction from './auth.actions';
import { setStorageVariable } from 'app/utils/common';
import { getUserProfile } from '../users/users.actions';
import { StorageKey } from 'app/types/common.types';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearToken: (state) => {
      state.token = null;
      setStorageVariable(StorageKey.TOKEN, '');
      state.isAuthenticated = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFunction.login.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
    });
  },
});
export const { clearToken, setToken, setIsAuthenticated } = authSlice.actions;
export default authSlice;

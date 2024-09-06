import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthAction from './auth.constants';
import { loginService, logoutService } from 'app/service/auth.service';
import { ILoginParams, ILogoutParams } from 'app/types/auth.types';
import { showToast } from 'app/utils/toast';
import { NOTIFICATION_TYPE } from 'app/types/common.types';

export const login = createAsyncThunk(
  AuthAction.LOGIN,
  async (params: ILoginParams, { rejectWithValue }) => {
    try {
      const response = await loginService(params);
      return response;
    } catch (error) {
      showToast({ type: NOTIFICATION_TYPE.ERROR, message: error.message });
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  AuthAction.LOGOUT,
  async (params: ILogoutParams, { rejectWithValue }) => {
    try {
      const response = await logoutService(params);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAction } from './users.constants';
import { IGetUserProfileParams } from 'app/types/user.types';
import { getUserProfileService } from 'app/service/user.service';
import { showToast } from 'app/utils/toast';
import { NOTIFICATION_TYPE } from 'app/types/common.types';

export const getUserProfile = createAsyncThunk(
  UserAction.GET_USER_PROFILE,
  async (params: IGetUserProfileParams, { rejectWithValue }) => {
    try {
      const response = await getUserProfileService(params);
      return response;
    } catch (error) {
      showToast({ type: NOTIFICATION_TYPE.ERROR, message: 'Fail to get user profile' });
      return rejectWithValue(error);
    }
  }
);

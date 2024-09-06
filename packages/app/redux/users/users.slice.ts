import { createSlice } from '@reduxjs/toolkit';
import { IUser, IUserBasic } from 'app/types/user.types';
import { getUserBasic } from 'app/utils/jwt';
import * as asyncFunction from './users.actions';

interface UserState {
  profile: IUserBasic | IUser | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentuser: (state, action) => {
      (state.profile = null), action.payload;
    },
    getUserBasicProfile: (state, action) => {
      const profile = getUserBasic(action.payload);
      state.profile = profile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFunction.getUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const { setCurrentuser, getUserBasicProfile } = userSlice.actions;
export default userSlice;

import { combineReducers } from '@reduxjs/toolkit';
import { authName, authReducer } from './auth';
import { usersName, usersReducer } from './users';

const rootReducer = combineReducers({
  [authName]: authReducer,
  [usersName]: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

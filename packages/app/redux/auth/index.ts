import authSlice from './auth.slice';

const { name, reducer } = authSlice;

export { name as authName, reducer as authReducer };
export * from './auth.actions';

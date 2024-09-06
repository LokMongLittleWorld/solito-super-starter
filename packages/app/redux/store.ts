import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import { useDispatch } from 'react-redux';

const isDevelopment = process.env.NODE_ENV === 'development';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return isDevelopment ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

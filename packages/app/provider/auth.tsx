import { login, logout } from 'app/redux/auth/auth.actions';
import { clearToken, setIsAuthenticated, setToken } from 'app/redux/auth/auth.slice';
import { RootState } from 'app/redux/rootReducer';
import { useAppDispatch } from 'app/redux/store';
import { getUserProfile } from 'app/redux/users/users.actions';
import { getUserBasicProfile, setCurrentuser } from 'app/redux/users/users.slice';
import { ILoginParams } from 'app/types/auth.types';
import { StorageKey } from 'app/types/common.types';
import { getStorageVariable } from 'app/utils/common';
import { isTokenValid } from 'app/utils/jwt';
import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSelector } from 'react-redux';

interface IAuthContext {
  token: string | null;
  profile: RootState['users']['profile'];
  isAuthenticated: boolean;
  login: (params: ILoginParams) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { token, profile, isAuthenticated } = useSelector((state: RootState) => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.users.profile,
  }));

  useEffect(() => {
    if (token) {
      const isValid = isTokenValid(token);
      if (isValid) {
        dispatch(setIsAuthenticated(true));
        dispatch(getUserBasicProfile(token));
        dispatch(getUserProfile({ token }));
      } else {
        dispatch(clearToken());
        dispatch(setCurrentuser(null));
      }
    }
  }, [token, dispatch]);

  useEffect(() => {
    const handleSessionToken = async () => {
      const token = await getStorageVariable(StorageKey.TOKEN);
      dispatch(setToken(token));
    };
    handleSessionToken();
  }, [dispatch]);

  const loginHandler = async (params: ILoginParams) => {
    return await dispatch(login(params));
  };

  const logoutHandler = async () => {
    if (token) {
      await dispatch(logout({ token }));
    }
    dispatch(setCurrentuser(null));
    dispatch(clearToken());
  };

  return (
    <AuthContext.Provider
      value={{ token, profile, isAuthenticated, login: loginHandler, logout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

import { ENV } from 'app/config/env';
import { IUserBasic } from 'app/types/user.types';
import JWT from 'expo-jwt';
import { setStorageVariable } from './common';
import { StorageKey } from 'app/types/common.types';

const JWT_SECRET = ENV.REACT_APP_JWT_SECRET;

interface TokenPayload {
  userBasic: IUserBasic;
  exp: number;
}

export const generateToken = (userBasic: IUserBasic, expireSecond: number) => {
  const exp = Math.floor(Date.now() / 1000) + expireSecond;
  const token = JWT.encode({ userBasic, exp }, JWT_SECRET);
  setStorageVariable(StorageKey.TOKEN, token);
  return token;
};

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded: TokenPayload = JWT.decode(token, JWT_SECRET);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const getTokenExpirationTime = (token: string): number => {
  try {
    const decoded: TokenPayload = JWT.decode(token, JWT_SECRET);
    return decoded.exp * 1000;
  } catch (error) {
    return 0;
  }
};

export const getUserBasic = (token: string): IUserBasic | null => {
  try {
    const decoded: TokenPayload = JWT.decode(token, JWT_SECRET);
    return decoded.userBasic;
  } catch (error) {
    return null;
  }
};

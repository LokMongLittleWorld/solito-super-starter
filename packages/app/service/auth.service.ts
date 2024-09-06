import { ILoginParams, ILoginResponse, ILogoutParams } from 'app/types/auth.types';
import { IUserBasic, ROLE } from 'app/types/user.types';
import { generateToken } from 'app/utils/jwt';

const TOEKN_EXPIRE_TIME = 3600;

export const loginService = async (params: ILoginParams): Promise<ILoginResponse> => {
  // timeout
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (params.email === '' || params.password === '') {
    throw new Error('Email and password are required');
  }

  const profile: IUserBasic = {
    id: '5947970c-e753-4bb9-8152-de6b723470ea',
    role: ROLE.CLIENT,
  };

  const token = generateToken(profile, TOEKN_EXPIRE_TIME);

  return { token };
};

export const logoutService = async (params: ILogoutParams): Promise<void> => {
  // timeout
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

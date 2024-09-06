import { IGetUserProfileParams, IUser } from 'app/types/user.types';
import { getUserBasic } from 'app/utils/jwt';

export const getUserProfileService = async (params: IGetUserProfileParams): Promise<IUser> => {
  //time out for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!params.token) {
    throw new Error('Invalid token');
  }

  const resposne = {
    id: '5947970c-e753-4bb9-8152-de6b723470ea',
    email: 'user1@gmail.com',
    firstName: 'Bruce',
    lastName: 'Lee',
    gender: 'male',
    role: 'client',
  };

  const userBasic = getUserBasic(params.token);
  if (userBasic?.id !== resposne.id || userBasic?.role !== resposne.role) {
    throw new Error('Invalid token');
  }

  return resposne as IUser;
};

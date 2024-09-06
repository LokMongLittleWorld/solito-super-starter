export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export enum ROLE {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export interface IUserBasic {
  id: string;
  role: ROLE;
}

export interface IUser extends IUserBasic {
  email: string;
  firstName: string;
  lastName: string;
  gender: GENDER;
  dateOfBirth?: Date;
  profilePic?: string;
}

export interface IGetUserProfileParams {
  token: string;
}

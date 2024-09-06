export interface ILoginParams {
  email: string; //TODO: username/userID/phone number/ ???
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface ILogoutParams {
  token: string;
}

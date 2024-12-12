import { UserModel } from '@/models/user.model';
import { Api } from './axiosClient';
import END_POINT from './endpoint';
export interface LoginResponse {
  shop: UserModel;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
interface LoginPayload {
  email: string;
  password: string;
}

const login: (body: LoginPayload) => Promise<LoginResponse> = async body => {
  const response = await Api.post<LoginResponse, LoginPayload>(END_POINT.AUTH.LOGIN, body);
  return response;
};

export { login };

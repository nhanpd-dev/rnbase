import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const login = (body: { email: string; password: string }) => {
  return AxiosClient.post(END_POINT.AUTH.LOGIN, body);
};

export { login };

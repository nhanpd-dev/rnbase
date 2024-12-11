import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ListParams } from '@/types/list';
import { parseListParamsToQueryString } from '@/utils/params';
import { store } from '../../App';
import { BASE_URL } from '@/constants';
import { readToken, deleteToken } from '@/utils/storage';

const logOnDev = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message);
  }
};
const showErrorApi = (data: any) => {
  if (data && typeof data.message === 'string') {
    // show toast msg
  }

  if (data && data.messages.length > 0) {
    // show toast msg with list
  }
};

const responseBody = <T>(response: AxiosResponse<T>) => <T>response.data;

const getToken = () => {
  const userToken = readToken();
  return userToken || '';
};
const requestConfig = {
  baseURL: BASE_URL,
  timeout: 10000, // 10s
};

const request: AxiosInstance = axios.create(requestConfig);

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // Set Headers Here
  // Check Authentication Here
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('🚀 [API] CONFIG: ', config);

  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // const { method, url } = response.config;
  // const { status } = response;
  return response.data;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError | Error> => {
  if (axios.isAxiosError(error)) {
    console.log('🚀 [API] ERROR: ', { error });
    const { response } = error;
    const { status, data } = response ?? {};
    if (status === 401 || status === 403) {
      // fork logout
      deleteToken();
      store.dispatch({
        type: 'auth/doLogout',
      });
    } else {
      showErrorApi(data);
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
    showErrorApi(error.message);
  }

  return Promise.reject(error);
};

request.interceptors.request.use(onRequest, onErrorResponse);
request.interceptors.response.use(onResponse, onErrorResponse);

export const APIS = {
  get: <T>(url: string) => request.get<T>(url).then(responseBody<T>),
  getList: <T>(url: string, params: ListParams) => request.get<T>(`${url}?${parseListParamsToQueryString(params)}`).then(responseBody<T>),
  post: <T>(url: string, data: T) => request.post(url, data).then(responseBody<T>),
};
export default request;

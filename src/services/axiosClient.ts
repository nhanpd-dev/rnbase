import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ListParams } from 'app-list';
import { parseListParamsToQueryString } from '@/utils/params';
import { store } from '../../App';
import { BASE_URL } from '@/constants';
import { readToken, deleteToken } from '@/utils/storage';
import { AppError, AppResponse } from './types';

const logOnDev = (message: string, data?: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message, data);
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

const getToken = () => {
  const userToken = readToken();
  return userToken || '';
};
const requestConfig = {
  baseURL: BASE_URL,
  timeout: 10000, // 10s
};

const request: AxiosInstance = axios.create(requestConfig);

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  // Set Headers Here
  // Check Authentication Here
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  logOnDev(`🚨 [API] | CONFIG: `, config);

  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse['data'] =>
  response.data;

const onErrorResponse = (
  error: AppError | Error,
): Promise<AppError | Error> => {
  if (axios.isAxiosError(error)) {
    logOnDev(`🚨 [API] | isAxiosError: `, error);
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

const responseBody = <R = any>(response: AppResponse<R>) =>
  <R>response.metadata;

export const Api = {
  get: <R>(url: string) =>
    request
      .get<R>(url)
      .then(response => responseBody<R>(response as unknown as AppResponse<R>)),
  getList: <R>(url: string, params: ListParams) =>
    request
      .get<R>(`${url}?${parseListParamsToQueryString(params)}`)
      .then(response => responseBody<R>(response as unknown as AppResponse<R>)),
  post: <R = any, D = any>(url: string, data: D) =>
    request
      .post(url, data)
      .then(response => responseBody<R>(response as unknown as AppResponse<R>)),
};
export default request;

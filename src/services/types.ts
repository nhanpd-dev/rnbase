import { AxiosError } from "axios";

export interface AppResponse<T = any> {
  message: string;
  metadata?: T | null;
  status: number;
}

export interface AppError extends AxiosError {}
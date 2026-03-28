import api from './axiosInstance';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: { id: string; name: string; email: string; role: string };
    accessToken: string;
    refreshToken: string;
  };
}

export const loginApi = (payload: LoginPayload) =>
  api.post<LoginResponse>('/auth/login', payload);

import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Tự động đính kèm accessToken vào mỗi request
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Nếu BE trả 401 → toast + xóa session + redirect về login
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      sessionStorage.removeItem('admin_auth');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
      toast.error('Hết hạn phiên làm việc. Vui lòng đăng nhập lại.');
      setTimeout(() => { window.location.href = '/admin/login'; }, 1500);
    }
    return Promise.reject(error);
  }
);

export default api;

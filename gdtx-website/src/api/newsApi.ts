import api from './axiosInstance';

export interface NewsItem {
  _id: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  img: string;
  date: string;
}

export interface NewsListResponse {
  success: boolean;
  data: { news: NewsItem[]; total: number; page: number; limit: number };
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
export const imgUrl = (img: string) =>
  img?.startsWith('http') ? img : `${BASE_URL.replace('/api/v1', '')}${img}`;

export const getNewsList = (params?: { page?: number; limit?: number; tag?: string; q?: string }) =>
  api.get<NewsListResponse>('/news', { params });

export const getNewsOne = (id: string) =>
  api.get<{ success: boolean; data: NewsItem }>(`/news/${id}`);

export const createNews = (form: FormData) =>
  api.post('/news', form, { headers: { 'Content-Type': 'multipart/form-data' } });

export const updateNews = (id: string, form: FormData) =>
  api.put(`/news/${id}`, form, { headers: { 'Content-Type': 'multipart/form-data' } });

export const deleteNews = (id: string) =>
  api.delete(`/news/${id}`);

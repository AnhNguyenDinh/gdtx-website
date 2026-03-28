import api from './axiosInstance';

export interface AboutData {
  _id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
export const imgUrl = (img: string) =>
  img?.startsWith('http') ? img : `${BASE_URL.replace('/api/v1', '')}${img}`;

export const getAbout = () =>
  api.get<{ success: boolean; data: AboutData }>('/about');

export const updateAbout = (form: FormData) =>
  api.put('/about', form, { headers: { 'Content-Type': 'multipart/form-data' } });

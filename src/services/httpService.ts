// src/services/httpService.ts
import axios from 'axios';

export const get = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const put = async (url: string, data: any) => {
  const response = await axios.put(url, data);
  return response.data;
};
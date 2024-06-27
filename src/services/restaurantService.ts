// src/services/restaurantService.ts
import { get, post, put } from './httpService';

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error("REACT_APP_API_URL is not defined in .env file");
}

export const getAllRestaurants = async () => {
  return get(`${API_URL}/Administrator/GetAllRestaurants`);
};

export const addRestaurant = async (name: string, location: string) => {
  const data = { name, location };
  return post(`${API_URL}/Administrator/Restaurant`, data);
};

export const updateRestaurant = async (id: number, name: string, location: string) => {
  const data = { id, name, location };
  return put(`${API_URL}/Administrator/Restaurant`, data);
};

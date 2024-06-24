// src/services/restaurantService.ts
import { get, post } from './httpService';

const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL', API_URL);

export const getAllRestaurants = async () => {
  return get(`${API_URL}/Administrator/GetAllRestaurants`);
};

export const addRestaurant = async (name: string, location: string) => {
  const data = { name, location };
  return post(`${API_URL}/Administrator/Restaurant`, data);
};

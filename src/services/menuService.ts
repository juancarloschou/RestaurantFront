// src/services/menuService.ts
import { get, post, put, del } from './httpService';

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error("REACT_APP_API_URL is not defined in .env file");
}

export const getMenu = async (restaurantId: number) => {
  return get(`${API_URL}/Administrator/Menu/${restaurantId}`);
};

export const addMenuItem = async (restaurantId: number, menuItem: { name: string; price: number }) => {
  return post(`${API_URL}/Administrator/MenuItem`, { restaurantId, ...menuItem });
};

export const updateMenuItem = async (restaurantId: number, menuItem: { id: number; name: string; price: number }) => {
  return put(`${API_URL}/Administrator/MenuItem`, { restaurantId, ...menuItem });
};

export const deleteMenuItem = async (restaurantId: number, menuItemId: number) => {
  return del(`${API_URL}/Administrator/MenuItem`, { restaurantId, id: menuItemId });
};

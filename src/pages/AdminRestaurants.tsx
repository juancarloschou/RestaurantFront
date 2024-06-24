// src/pages/AdminRestaurants.tsx
import React, { useEffect, useState } from 'react';
import AddRestaurant from '../components/Admin/AddRestaurant';
import RestaurantList from '../components/Admin/RestaurantList';
import { getAllRestaurants, addRestaurant as addRestaurantService } from '../services/restaurantService';

interface Restaurant {
  id: number;
  name: string;
  location: string;
}

const AdminRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getAllRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRestaurant = async (name: string, location: string) => {
    try {
      const newRestaurantId = await addRestaurantService(name, location);
      console.log(`New restaurant ID: ${newRestaurantId}`);
      await fetchRestaurants();
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Manage Restaurants</h1>
      <AddRestaurant onAddRestaurant={addRestaurant} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default AdminRestaurants;


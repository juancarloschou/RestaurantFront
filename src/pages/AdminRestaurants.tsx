// src/pages/AdminRestaurants.tsx
import React, { useState, useEffect } from 'react';
import AddRestaurant from '../components/Admin/AddRestaurant';
import RestaurantList from '../components/Admin/RestaurantList';
import EditRestaurant from '../components/Admin/EditRestaurant';
import { getAllRestaurants, addRestaurant as addRestaurantService, updateRestaurant as updateRestaurantService } from '../services/restaurantService';

interface Restaurant {
  id: number;
  name: string;
  location: string;
}

const AdminRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);

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

  const updateRestaurant = async (id: number, name: string, location: string) => {
    try {
      await updateRestaurantService(id, name, location);
      await fetchRestaurants();
      setEditingRestaurant(null);
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Manage Restaurants</h1>
      {editingRestaurant ? (
        <EditRestaurant
          restaurant={editingRestaurant}
          onSave={updateRestaurant}
          onCancel={() => setEditingRestaurant(null)}
        />
      ) : (
        <>
          <AddRestaurant onAddRestaurant={addRestaurant} />
          <RestaurantList restaurants={restaurants} onEdit={setEditingRestaurant} />
        </>
      )}
    </div>
  );
};

export default AdminRestaurants;

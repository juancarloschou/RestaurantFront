// src/components/Admin/RestaurantList.tsx
import React from 'react';
import './RestaurantList.css';

interface Restaurant {
  id: number;
  name: string;
  location: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <table className="restaurant-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.id}</td>
            <td>{restaurant.name}</td>
            <td>{restaurant.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;

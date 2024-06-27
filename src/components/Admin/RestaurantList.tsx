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
  onEdit: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onEdit }) => (
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
          <td>
            <button onClick={() => onEdit(restaurant)}>✏️</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);


export default RestaurantList;

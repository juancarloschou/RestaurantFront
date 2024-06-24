// src/components/Admin/AddRestaurant.tsx
import React, { useState } from 'react';
import './AddRestaurant.css';

interface AddRestaurantProps {
  onAddRestaurant: (name: string, location: string) => void;
}

const AddRestaurant: React.FC<AddRestaurantProps> = ({ onAddRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && location) {
      onAddRestaurant(name, location);
      setName('');
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-restaurant-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default AddRestaurant;

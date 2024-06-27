// src/components/Admin/EditRestaurant.tsx
import React, { useState } from 'react';
import './EditRestaurant.css';

interface EditRestaurantProps {
  restaurant: { id: number; name: string; location: string };
  onSave: (id: number, name: string, location: string) => void;
  onCancel: () => void;
}

const EditRestaurant: React.FC<EditRestaurantProps> = ({ restaurant, onSave, onCancel }) => {
  const [name, setName] = useState(restaurant.name);
  const [location, setLocation] = useState(restaurant.location);

  const handleSave = () => {
    onSave(restaurant.id, name, location);
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      <form className="edit-restaurant-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRestaurant;

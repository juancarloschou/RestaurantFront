// src/pages/AdminMenu.tsx
import React, { useState, useEffect } from 'react';
import { getMenu, addMenuItem, updateMenuItem, deleteMenuItem } from '../services/menuService';
import { getAllRestaurants } from '../services/restaurantService';
import './AdminMenu.css';

interface Restaurant {
  id: number;
  name: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const AdminMenu: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newMenuItem, setNewMenuItem] = useState<MenuItem>({ id: 0, name: '', price: 0 });
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (selectedRestaurant !== null) {
      fetchMenuItems(selectedRestaurant);
    }
  }, [selectedRestaurant]);

  const fetchRestaurants = async () => {
    try {
      const data = await getAllRestaurants();
      setRestaurants(data);
      if (data.length > 0) {
        setSelectedRestaurant(data[0].id);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const fetchMenuItems = async (restaurantId: number) => {
    try {
      const data = await getMenu(restaurantId);
      setMenuItems(data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleAddMenuItem = async () => {
    if (selectedRestaurant !== null) {
      try {
        await addMenuItem(selectedRestaurant, newMenuItem);
        fetchMenuItems(selectedRestaurant);
        setNewMenuItem({ id: 0, name: '', price: 0 });
      } catch (error) {
        console.error('Error adding menu item:', error);
      }
    }
  };

  const handleUpdateMenuItem = async () => {
    if (editingMenuItem && selectedRestaurant !== null) {
      try {
        await updateMenuItem(selectedRestaurant, editingMenuItem);
        fetchMenuItems(selectedRestaurant);
        setEditingMenuItem(null);
      } catch (error) {
        console.error('Error updating menu item:', error);
      }
    }
  };

  const handleDeleteMenuItem = async (menuItemId: number) => {
    if (selectedRestaurant !== null) {
      try {
        await deleteMenuItem(selectedRestaurant, menuItemId);
        fetchMenuItems(selectedRestaurant);
      } catch (error) {
        console.error('Error deleting menu item:', error);
      }
    }
  };

  return (
    <div className="admin-menu">
      <h1>Manage Menu</h1>
      <div>
        <label htmlFor="restaurant-select">Select Restaurant: </label>
        <select
          id="restaurant-select"
          value={selectedRestaurant ?? ''}
          onChange={(e) => setSelectedRestaurant(parseInt(e.target.value))}
        >
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>
      <div className="menu-item-form">
        <h2>Add Menu Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newMenuItem.name}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMenuItem.price}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, price: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddMenuItem}>Add</button>
      </div>
      {editingMenuItem && (
        <div className="menu-item-form">
          <h2>Edit Menu Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={editingMenuItem.name}
            onChange={(e) => setEditingMenuItem({ ...editingMenuItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={editingMenuItem.price}
            onChange={(e) => setEditingMenuItem({ ...editingMenuItem, price: parseFloat(e.target.value) })}
          />
          <button onClick={handleUpdateMenuItem}>Update</button>
          <button onClick={() => setEditingMenuItem(null)}>Cancel</button>
        </div>
      )}
      <h2>Menu Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => setEditingMenuItem(item)}>✏️</button>
                <button onClick={() => handleDeleteMenuItem(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenu;

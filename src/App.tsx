// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import AdminRestaurants from './pages/AdminRestaurants';
import AdminMenu from './pages/AdminMenu';
import WorkerOrder from './pages/WorkerOrder';
import WorkerCustomer from './pages/WorkerCustomer';
import './App.css'; // Import app.css

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/admin/restaurants" component={AdminRestaurants} />
      <Route path="/admin/menu" component={AdminMenu} />
      <Route path="/worker/order" component={WorkerOrder} />
      <Route path="/worker/customer" component={WorkerCustomer} />
    </Switch>
  </Router>
);

export default App;

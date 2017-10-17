import React from 'react';

import { NavLink } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = () => (
  <div className="Sidebar">
    <nav className="nav flex-column">
      <NavLink className="nav-link active" to="/">Active</NavLink>
      <NavLink className="nav-link" to="/link">Link</NavLink>
      <NavLink className="nav-link disabled" to="/unknown">Disabled</NavLink>
    </nav>
  </div>
);

export default Sidebar;

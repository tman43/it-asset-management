import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          IT Assets
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assets" className="nav-link">
              Assets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assignments" className="nav-link">
              Assignments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/maintenance" className="nav-link">
              Maintenance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
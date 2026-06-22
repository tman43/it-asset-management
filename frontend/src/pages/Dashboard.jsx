import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalAssets: 0,
    activeUsers: 0,
    assignedAssets: 0,
    pendingMaintenance: 0
  });

  useEffect(() => {
    // TODO: Fetch dashboard stats from API
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Assets</h3>
          <p className="stat-value">{stats.totalAssets}</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p className="stat-value">{stats.activeUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Assigned Assets</h3>
          <p className="stat-value">{stats.assignedAssets}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Maintenance</h3>
          <p className="stat-value">{stats.pendingMaintenance}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
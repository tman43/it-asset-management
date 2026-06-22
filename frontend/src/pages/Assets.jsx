import React, { useState, useEffect } from 'react';
import './Assets.css';

function Assets() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch assets from API
    setLoading(false);
  }, []);

  return (
    <div className="assets-container">
      <h1>Assets</h1>
      <button className="btn-add">Add New Asset</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="assets-table">
          <thead>
            <tr>
              <th>Asset Tag</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map assets to table rows */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Assets;
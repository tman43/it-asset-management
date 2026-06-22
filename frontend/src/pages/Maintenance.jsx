import React, { useState, useEffect } from 'react';
import './Maintenance.css';

function Maintenance() {
  const [maintenanceLogs, setMaintenanceLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch maintenance logs from API
    setLoading(false);
  }, []);

  return (
    <div className="maintenance-container">
      <h1>Maintenance Logs</h1>
      <button className="btn-add">Log Maintenance</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="maintenance-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Maintenance Type</th>
              <th>Date</th>
              <th>Performed By</th>
              <th>Cost</th>
              <th>Next Maintenance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map maintenance logs to table rows */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Maintenance;
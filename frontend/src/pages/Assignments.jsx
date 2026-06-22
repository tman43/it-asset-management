import React, { useState, useEffect } from 'react';
import './Assignments.css';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch assignments from API
    setLoading(false);
  }, []);

  return (
    <div className="assignments-container">
      <h1>Asset Assignments</h1>
      <button className="btn-add">Create Assignment</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Assigned To</th>
              <th>Assignment Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map assignments to table rows */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Assignments;
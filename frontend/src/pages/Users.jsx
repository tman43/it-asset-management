import React, { useState, useEffect } from 'react';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch users from API
    setLoading(false);
  }, []);

  return (
    <div className="users-container">
      <h1>Users</h1>
      <button className="btn-add">Add New User</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map users to table rows */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
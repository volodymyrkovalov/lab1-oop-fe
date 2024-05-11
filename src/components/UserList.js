import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]); // State to hold user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Function to fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data); // Setting the user data received from server
        setLoading(false); // Set loading to false after data is received
      } catch (err) {
        setError(err.message); // Handle errors if the request fails
        setLoading(false);
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) return <div>Loading...</div>; // Display while loading data
  if (error) return <div>Error: {error}</div>; // Display if there is an error

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

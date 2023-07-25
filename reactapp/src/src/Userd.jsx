import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Userd() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // Set the headers with the token for the API call
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get('http://127.0.0.1:8181/api/v1/demo', { headers })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="homebutton">
        <Link to="/Adminhome">&#8592;Back</Link>
      </div>
      <table className="gen">
        <div className="container18">
          <thead>
            <tr className="form-title">
              <th className="header-cell">User ID</th>
              <th className="header-cell">User Name</th>
              <th className="header-cell">User Email</th>
              <th className="header-cell">User Password</th>
              <th className="header-cell">Role</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Userd;

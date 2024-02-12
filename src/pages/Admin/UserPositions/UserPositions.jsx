import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userPositionsTable.css'; 

const UserPositionsTable = () => {
  const [userPositions, setUserPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7211/userPositions');
        setUserPositions(response.data);
      } catch (error) {
        console.error('Veri getirme hatası:', error);
      }
    };

    fetchData(); 
  }, []);
  return (
    <div className="table-container">
      <h2>User Positions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userPositions.map(position => (
            <tr key={position.id}>
              <td>{position.id}</td>
              <td>{position.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPositionsTable;

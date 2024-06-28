import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

function AddTeamMember() {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found, please log in again.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5101/team-members', {
        name,
        occupation,
        cell,
        email
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        navigate('/dashboard/team-members');
      }
    } catch (error) {
      console.error('Error adding team member:', error);
      setError('Failed to add team member. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add Team Member</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="add-form-member">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cell"
          value={cell}
          onChange={(e) => setCell(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
}

export default AddTeamMember;

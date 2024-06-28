import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditTeamMember() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5101/team-members/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        console.log('Response:', response);
        const { name, occupation, cell, email } = response.data;
        setName(name);
        setOccupation(occupation);
        setCell(cell);
        setEmail(email);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team member:', error);
        setError('Failed to fetch team member.');
        setLoading(false);
      }
    };

    fetchTeamMember();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5101/team-members/${id}`, { name, occupation, cell, email }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(() => {
        navigate('/dashboard/team-members');
      })
      .catch(error => {
        console.error('Error updating team member:', error);
        setError('Failed to update team member.');
      });
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>; 
  }

  return (
    <div>
      <h2>Edit Team Member</h2>
      <form onSubmit={handleSubmit} className="add-form-member">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} required />
        <input type="text" placeholder="Cell" value={cell} onChange={(e) => setCell(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTeamMember;

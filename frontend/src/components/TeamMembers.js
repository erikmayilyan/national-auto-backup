import React, { useEffect, useState } from 'react';
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import axios from 'axios';

function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in again.');
        return;
      }

      try {
        const response = await axios.get('https://national-auto-backup-frontend.onrender.com/team-members', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setError('Failed to fetch team members. Please try again.');
      }
    };

    fetchTeamMembers();
  }, []);

  const deleteTeamMember = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`https://national-auto-backup-frontend.onrender.com/team-members/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setTeamMembers(teamMembers.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error deleting team member:', error);
      setError('Failed to delte team member.');
    }
  };

  return (
    <div className="teammembers">
      <h1>Team Members</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {teamMembers.map(member => (
          <li key={member._id} className="member-info">
            {member.name} <br /> {member.occupation} 
            <br />
            <Link className="the-link-for" to={`/dashboard/edit-team-member/${member._id}`}><MdModeEditOutline /></Link>
            <MdDeleteOutline className="the-link-for" onClick={() => deleteTeamMember(member._id)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMembers;

import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Logout from './Logout';
import "./Dashboard.css";
import { jwtDecode } from "jwt-decode";
import TeamMembers from './TeamMembers';
import AddTeamMember from "./AddTeamMember";
import EditTeamMember from "./EditTeamMember";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.clear();
    navigate('/thelogin')
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); 

    if (!token) {
      navigate('/thelogin'); 
    } else {
      try {
        const decodedToken = jwtDecode(token); 
        const currentTime = Date.now() / 1000; 
        if (decodedToken.exp < currentTime) { 
          localStorage.removeItem('token'); 
          navigate('/'); 
        } else {
          setLoading(false); 
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token'); 
        navigate('/'); 
      }
    }
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="admin-header">
        <h1>ADMIN DASHBOARD</h1>
        <Link onClick={logout} to="/thelogin">
          <Logout />
        </Link>
      </div>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="team-members" className='the-link-redirect'>Team Member</Link>
          </li>
          <li>
            <Link to="add-team-member" className='the-link-redirect'>Add Team Member</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="team-members" element={<TeamMembers />} />
        <Route path="add-team-member" element={<AddTeamMember />} />
        <Route path="edit-team-member/:id" element={<EditTeamMember />} />
      </Routes>
    </div>
  );
}

export default Dashboard;

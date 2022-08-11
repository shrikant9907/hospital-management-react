import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useState } from 'react';

const ProfileDropdown = () => {

  let navigate = useNavigate();

  const [showLinks, setShowLinks] = useState(false)

  const handleLogout = () => {
    toast.success('You are logged out successfully.')
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login')
  }

  return (
    <div className="profile-dropdown dropdown ms-auto">
      <button className="dropdown-toggle" onClick={() => setShowLinks(!showLinks)}>
        <img src='https://i.pravatar.cc/300' alt='Avatar' />
      </button>
      {
        showLinks && <div className="dropdown-menu show">
        <Link className="dropdown-item" to="/profile">Profile</Link>
        <Link className="dropdown-item" to="/settings">Settings</Link>
        <span onClick={() => handleLogout()}  className="dropdown-item">Logout</span>
      </div>
      }
    </div>
  )
}

export default ProfileDropdown
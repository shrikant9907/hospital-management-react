import './Header.scss';
import React from 'react';
import ProfileDropdown from './ProfileDropdown';

function Header() {

  return (
    <div className="admin-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          Welcome to Dashboard!
        </nav>
        <ProfileDropdown />
      </div>
    </div>
  )
}

export default Header
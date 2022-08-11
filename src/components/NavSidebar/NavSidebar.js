import React from 'react';
import { Link } from 'react-router-dom';
import "./NavSidebar.scss";

import { FaUserMd, FaUsers } from "react-icons/fa";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";

const NavSidebar = () => {
  
  const handleActivePage = (page) => {
    localStorage.setItem('activePage', page); 
  }

  const activePage = localStorage.getItem('activePage')

  const sidebarLinks = [
    {
      active: true,
      label: 'Dashboard',
      link: '/dashboard',
      haveSubMenus: false,
      icon: <AiFillDashboard />
    },
    {
      active: true,
      label: 'Doctors',
      link: '/doctors',
      haveSubMenus: false,
      icon: <FaUserMd />
    },
    {
      active: true,
      label: 'Patients',
      link: '/patients',
      haveSubMenus: false,
      icon: <FaUsers />
    },
    {
      active: true,
      label: 'Reports',
      link: '/reports',
      haveSubMenus: false,
      icon: <FaUsers />
    },
    {
      active: true,
      label: 'Payment Details',
      link: '/payment-details',
      haveSubMenus: false,
      icon: <FaUsers />
    },
    {
      active: true,
      label: 'Users',
      link: '/users',
      haveSubMenus: false,
      icon: <FaUsers />
    },
    {
      active: true,
      label: 'Settings',
      link: '/settings',
      haveSubMenus: false,
      icon: <AiFillSetting />
    },
  ]

  return (
    <div className="sidebar-ui">
      <div className="ssui-header">
        <Link className="shlink" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div className="ssui-body">
        {sidebarLinks && sidebarLinks.map((item, idx) =>
          <Link 
            onClick={() => handleActivePage(item.link)} 
            className= {activePage !== item.link ?  'ssui-link' : 'ssui-link active'}
            key={idx} 
            to={`${item.link}`}
            >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>)
        }
      </div>
      <div className="ssui-footer">

      </div>
    </div>
  )
}

export default NavSidebar
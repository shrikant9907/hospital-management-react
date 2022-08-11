import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavSidebar from '../components/NavSidebar/NavSidebar'
import './layout.scss'

const DashboardLayout = (props) => {
  return (
    <div className='dashboard-layout'>
      <NavSidebar />
      <Header />
      <div className="content-area">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
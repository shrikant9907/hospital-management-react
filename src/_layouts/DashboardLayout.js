import React from 'react'  
import { BreadcrumbBar } from '../components/common/breadcrumb'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavSidebar from '../components/NavSidebar/NavSidebar'
import './layout.scss'

const DashboardLayout = (props) => {
  return (
    <div className='dashboard-layout'>
      <NavSidebar />
      <Header />
      <div className="content-area container">
        {props.heading && props.heading !=='' && <h3 className="page-heading">{props.heading}</h3>}
        <BreadcrumbBar data={props.breadcrumb} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
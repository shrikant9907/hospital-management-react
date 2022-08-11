import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './layout.scss'

const PageLayout = (props) => {
  return (
    <div className='page-layout'>
      <div className="container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
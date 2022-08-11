import React from 'react'
import './layout.scss'

const PageLayout = (props) => {
  return (
    <div className='page-layout'>
      <div className="container">
        {props.heading && props.heading !== '' && <h1 className='page-heading '>{props.heading}</h1>}
        {props.children}
      </div>
    </div>
  )
}

export default PageLayout
import React from 'react'
import './layout.scss'

const AuthPageLayout = (props) => {
  return (
    <div className='auth-page-ui'>
      <div className="container">
        {props.heading && props.heading !== '' && <h1 className='page-heading text-center'>{props.heading}</h1>}
        <div className="auth-form">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default AuthPageLayout
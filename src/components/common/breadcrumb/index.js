import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { convertPathnameTolabel } from '../../../_utils/Utils'
import './Breadcrumb.scss'

export const BreadcrumbBar = (props) => {

  const location = useLocation()

  const locationName = convertPathnameTolabel(location.pathname);

  let bcData = [
    { to: location.pathname, label: locationName },
  ];

  if (props.data && props.data !== undefined) {
    bcData = props.data;
  }

  const bcLast = bcData.pop();

  if (props.data) {
    bcData = props.data;
  }

  return (
    <>
      {bcData &&
        <nav className='breadcrumb-bar'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link className='tdn' to="/dashboard">Home</Link></li>
            {bcData.map((bc, idx) => <li key={idx} className="breadcrumb-item"><Link className='tdn' to={bc.to}>{bc.label}</Link></li>)}
            <li className="breadcrumb-item active">{bcLast.label}</li>
          </ol>
        </nav>
      }
    </>
  )
}

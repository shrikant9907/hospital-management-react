import './Footer.scss';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const appVersion = process.env.REACT_APP_VER;
    return (
        <div className="app-footer">
          <small>Version: { appVersion }</small>
          <small>Created by: Shrikant Yadav</small>
        </div>
    )
  }
}
 
import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../Design/logo.png'

export default function Logo() {
  return (
    <div>
        <div className='logo'>
            <img src={logo} className="img-fluid"></img>
        </div>
    </div>
  )
}

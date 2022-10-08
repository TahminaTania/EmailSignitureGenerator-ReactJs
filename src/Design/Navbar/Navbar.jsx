import React from 'react'
import './Navbar.css';
import tagline from '../Navbar/Email Signature Generator.png'
import {FaUserAlt} from "react-icons/fa"
import {useRef} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';

export default function Navbar() {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
  <div className='NavBar'>
    <header>
          <div className='tagline'><img src={tagline}  width="300"height="200"></img></div>
          <nav ref={navRef}>
              <a href="/#">Home</a>
              <a href="/#">Fetures</a>
              <a href="/#">Templates</a>
              <a href="/#">Blogs</a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div className='float-right'>
              <button class="btn btn-primary btn-sm"><span><FaUserAlt/></span>Log In</button>
              <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
          </div>
    </header>
  </div>
  )
}

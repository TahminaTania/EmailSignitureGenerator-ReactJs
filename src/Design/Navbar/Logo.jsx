import React, {useEffect} from 'react';
import '../Navbar/Navbar.css';
import logo from '../../Design/logo.png'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Logo() {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  return (
    <div>
        <div className='logo'>
            <img data-aos="fade-up-left" src={logo} className="img-fluid"></img>
        </div>
    </div>
  )
}

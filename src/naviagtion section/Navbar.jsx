import React, { useState,useEffect } from 'react'
import '../naviagtion section/Navbar.css'
import { CiMenuFries } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import {Link} from 'react-scroll'
import Home from '../img/icons8-home.gif'
import About from '../img/icons8-male-user.gif'
import Tools from '../img/icons8-tools.gif'
import Port from '../img/icons8-tools (1).gif'
import Testi from '../img/icons8-testimonial-50.png'
import Letter from '../img/icons8-letter.gif'
import Logo from '../img/icons8-code-64.png'
function Navbar() {
  const[click,setClick]=useState(false)
  const closeMenu = () => setClick(false)
  const handleclick =()=>{
    setClick(!click)
  }
  const [active, setActive]=useState(false)
  useEffect(() => {
    const changenav = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
  
    window.addEventListener('scroll', changenav);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changenav);
    };
  }, []);

  return (
    <>
    <header className={active?'header':'heads' }>
        <nav className='nav-cointainer'>
            <div className='flex items-center justify-center'>
            <img src={Logo} alt=""  className='h-24'/>
            <h1 className='text-2xl font-extrabold cursor-pointer'><span className={active?'logo':''}>  
            
              
            
            </span><span className='text-sky-800'>DEV</span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full
             bg-red-400 opacity-75">
              </span></span></h1>
            </div>
           <div className='hamburger' onClick={handleclick}>
            {click?
          <VscChromeClose className='text-4xl text-[#E91E63]' />:
           <CiMenuFries  className='text-4xl text-[#E91E63]'/>
           }
           </div>
           <ul className={click?'nav-menu active':'nav-menu'}>
            <li className={active?'nav-item':''}>
            <Link 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                 onClick={closeMenu}> <img src={Home} alt="home"  className='rounded-full'/> </Link>
              </li>
              <li className={active?'nav-item':''}>
            <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-90} 
                  duration={500} 
                 onClick={closeMenu}>  <img src={About} alt="about"  className='rounded-full'/></Link>
             </li>
             <li className={active?'nav-item':''}>
              
              <Link 
                  to="services" 
                  spy={true} 
                  smooth={true} 
                  offset={-75} 
                  duration={500} 
                 onClick={closeMenu}> <img src={Tools} alt=""  className='rounded-full'/> </Link>
              </li>
              <li className={active?'nav-item':''}>
            <Link 
                  to="portfolio" 
                  spy={true} 
                  smooth={true} 
                  offset={-60} 
                  duration={500} 
                 onClick={closeMenu}> <img src={Port} alt="portfolio" /></Link>
              
              </li>
              <li className={active?'nav-item':''}>
              
              <Link 
                  to="testimonial" 
                  spy={true} 
                  smooth={true} 
                  offset={-110} 
                  duration={500} 
                 onClick={closeMenu}> <img src={Testi} alt="" /> </Link>
              </li>
              <li className={active?'nav-item':''}>
              
              <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                 onClick={closeMenu}> <img src={Letter} alt="contact" /> </Link>
              </li>
           </ul>
        </nav>

         
    </header>
       

    </>
  )
}

export default Navbar
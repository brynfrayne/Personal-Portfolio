import React from 'react'
// import { NavLink } from 'react-router-dom';
// import {Navbar, Container, NavDropdown} from 'react-bootstrap'
import './Nav.scss';

export default function NavHamburger() {
  return (
<nav role="navigation">
  <div id="menuToggle">
    {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
    <input type="checkbox" />
    
    {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
    <span></span>
    <span></span>
    <span></span>
    
    {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
    <ul id="menu">
      <a href="#about"><li>About</li></a>
      <a href="#projects"><li>Projects</li></a>
      <a href="#skills"><li>Skills</li></a>
      <a href="#contact"><li>Contact</li></a>
    </ul>
  </div>
  
</nav>

    //   
  )
}

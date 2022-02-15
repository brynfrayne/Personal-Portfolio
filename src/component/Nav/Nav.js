import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

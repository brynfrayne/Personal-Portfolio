import React from 'react'
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav">
        <a className="nav__links" href="/about">About</a>
        <a className="nav__links" href="/skills">Skills</a>
        <a className="nav__links" href="/projects">Projects</a>
        <a className="nav__links" href="/contact">Contact</a>
    </nav>
  )
}

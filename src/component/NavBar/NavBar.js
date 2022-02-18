import React from 'react'
import './NavBar.scss';
import emailLogo from '../../assets/Icons/blackEmail.png';
import linkedinLogo from '../../assets/Icons/linkedinBlack.png';
import gitLogo from '../../assets/Icons/gitBlack.png';
import bfLogo from '../../assets/Icons/bfLogoBig.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
        <a href='/'><img  className='bf-logo' src={bfLogo} alt="" /></a>
        <a className="nav__links" href="/about">About</a>
        <a className="nav__links" href="/skills">Skills</a>
        <a className="nav__links" href="/projects">Projects</a>
        <div className='nav__links nav__links--social-icons'>
          <a href='https://www.github.com/brynfrayne'><img  className='social-icon'src={gitLogo} alt="" /></a>
          <a href="mailto:brynfrayne@gmail.com"><img  className='social-icon'src={emailLogo} alt="" /></a>
          <a href="https://www.linkedin.com/in/brynfrayne"><img  className='social-icon'src={linkedinLogo} alt="" /></a>
        </div>
    </nav>
  )
}

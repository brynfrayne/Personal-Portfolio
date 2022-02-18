import React from 'react'
import githubLogo from '../../assets/Icons/github.png';
import linkedinLogo from '../../assets/Icons/linkedin.png';
import './Contact.scss';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='contact'>
        <div>
            <NavLink to='/www.github.com/brynfrayne'><img src={githubLogo} alt="" />"/brynfrayne</NavLink>
        </div>
        <div>
            
        </div>
        <div>
            <img src={linkedinLogo} alt="" />
        </div>
    </div>
  )
}

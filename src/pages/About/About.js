import React from 'react'
import './About.scss';
import headshot from '../../assets/91647976.jpeg';


export default function About() {
  return (
    <div className='about'>
       <div class="headshot__box">
          <img className="headshot" src={headshot} alt="" />
        </div>
      <div>
        <div class="bio" contenteditable="false" tabindex="0">
          <h3 className='bio__title page-name'>About Me</h3>
          <p className='bio__text'>A full stack web developer in the midst of a career change.</p>
          <p className='bio__text'>Having worked in the woods for the past decade, I'm looking to find a job where I can flex my analytical &amp; creative skill sets (and stay dry).</p>
          <p className='bio__text'>I decided to pursue a Web Development Bootcamp as I wanted to really focus in on getting the skills needed in industry, and to learn how to learn quickly.
          </p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Landing.scss';
import TypewriterComponent from 'typewriter-effect';

export default function Landing() {

  return (
   
    <div className='landing'>
      

        <div class="content">
          <h1>Hello, my name is <span className='page-name'>Bryn Frayne</span></h1>

            
           <TypewriterComponent
           className='typewriter'
           onInit={typewriter => {
             typewriter.typeString('A Full-Stack Web Developer.').start();
           }}
           />



      </div>
    </div>
  )
}






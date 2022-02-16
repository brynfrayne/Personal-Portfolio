import React from 'react'
import './Landing.scss';
import TypewriterComponent from 'typewriter-effect';

export default function Landing() {
  // var typewriter = new Typewriter(landing, {
  //   loop: true,
  //   delay: 75,
  // });
  
  // typewriter
  //   .pauseFor(2500)
  //   .typeString('A simple yet powerful native javascript')
  //   .pauseFor(300)
  //   .deleteChars(10)
  //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  //   .pauseFor(1000)
  //   .start();

  return (
   
    <div className='landing'>
      

        <div class="content">
          <h1>Hello, my name is Bryn Frayne</h1>

            
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





// <div class="particles" id="tsparticles">
    //   <canvas class="tsparticles-canvas-el" style="width: 100%; height: 880px; pointer-events: initial;" width="850" height="1760">
    //   </canvas>
    // </div>
    
    {/* <div class="bg"></div> */}
      {/* <div class="bg bg2"></div> */}
      {/* <div class="bg bg3"></div> */}
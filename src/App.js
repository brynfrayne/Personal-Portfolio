// import InvestLikeTheBest from "./component/InvestLikeTheBest/InvestLikeTheBest";
import './App.scss';
import Landing from "./pages/Landing/Landing";
// import Nav from "./component/Nav/Nav";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
// import linkedIn from './assets/Icons/logo-linkedin-logo-icon-png-svg.png'
// import headshot from './assets/91647976.jpeg';

function App() {
  return (
    <div>
      {/* <div className='nav-bar'> */}
        {/* <Nav/> */}
        {/* <img className='nav-bar__logo' src={linkedIn} alt="" /> */}
      {/* </div>   */}
      {/* <div> */}
      <nav className="nav">
          <a className="nav__links" href="#about">About</a>
          <a className="nav__links" href="#skills">Skills</a>
          <a className="nav__links" href="#projects">Projects</a>
          <a className="nav__links" href="#contact">Contact</a>
      </nav>
      {/* </div> */}
      
      <Landing /> 
      {/* <div class="container-lrg">
      <picture>
       
      </picture> */}
    {/* </div> */}
      <About id="about"/>
      <Skills id="skills"/>
      
   
   

    </div>
  );
}

export default App;

import InvestLikeTheBest from "./component/InvestLikeTheBest/InvestLikeTheBest";
import './App.scss';
import Landing from "./pages/Landing/Landing";
import Nav from "./component/Nav/Nav";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div>
      {/* <Nav/> */}

      
      <Landing />
      <About id="about"/>
      <Skills id="skills"/>
      
    {/* <div class="container-lrg">
      <picture>
        <div class="mt60 duo">
          <img className="headshot" src="https://cdn.visual.com/images/5b1980c9-084c-4a27-adec-3058e4340571.jpg" alt="" />
        </div>
      </picture>
    </div> */}
   

    </div>
  );
}

export default App;

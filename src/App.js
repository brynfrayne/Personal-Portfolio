import './App.scss';
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import NavBar from './component/NavBar/NavBar';
import Projects from './pages/Projects/Projects';
import { BrowserRouter, Route } from 'react-router-dom';
// import linkedIn from './assets/Icons/logo-linkedin-logo-icon-png-svg.png'


function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Route path='/' exact component={Landing}/>
        <Route path='/about' exact component={About}/>
        <Route path='/skills' exact component={Skills}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/contact' exact component={Contact}/>

      </BrowserRouter>
    </div>
    
  );
}

export default App;

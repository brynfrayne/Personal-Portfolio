import InvestLikeTheBest from "./component/InvestLikeTheBest/InvestLikeTheBest";
import './App.scss';
import InStock from "./component/InStock/InStock";

function App() {
  return (
    <div>
      <p>Contact</p>
      <h4 className="subtitle">Full Stack Web Developer</h4>
      <h1>Bryn Frayne</h1>
      <nav class="social-links">
        <ul class="social-links__list">
          <li class="social-links__list-item">
            <a className="social-links__link" target="_blank" href="https://www.github.com/brynfrayne"> GitHub </a>
          </li>
          <li class="social-links__list-item">
            <a className="social-links__link" target="_blank" href="https://www.linkedin.com/in/brynfrayne"> LinkedIn </a>
          </li>
        </ul>
      </nav>
      <h2 class="mt30 mb30 subheading">
        <div>
          <div class="bio" contenteditable="false" tabindex="0">
            <p>A full stack web developer in the midst of a career change. Having worked in the woods for the past decade, I'm looking to find a job where I can flex my analytical &amp; creative skill sets (and stay dry). I decided to pursue a Web Development Bootcamp as I wanted to really focus in on getting the skills needed in industry, and to learn how to learn quickly.
            </p>
          </div>
        </div>
      </h2>
      <a target="_blank" href="" class="cta mt20">Portfolio</a>
    <div class="container-lrg">
      <picture>
        <div class="mt60 duo">
          <img className="headshot" src="https://cdn.visual.com/images/5b1980c9-084c-4a27-adec-3058e4340571.jpg" alt="" />
        </div>
      </picture>
    </div>
    <InvestLikeTheBest />
    <InStock/>

    </div>
  );
}

export default App;

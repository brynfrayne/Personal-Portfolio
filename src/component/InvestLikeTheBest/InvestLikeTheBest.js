import React from 'react'
import './InvestLikeTheBest.scss';
import gitLogo from '../../assets/Icons/gitblue.png';


export default function InvestLikeTheBest() {
  return (
    <div className='project-card'>
      <div className='project-card__header'>
        <h3 class="project-card__title">Invest Like The Best</h3>
        <div className='github__box'>
          <a className='github__link' href='https://www.github.com/brynfrayne/investlikethebest'><img  className='github__icon'src={gitLogo} alt="" />/InvestLikeTheBest</a>
        </div>
      </div>
        
            <div>
                <p>Invest Like The Best is a full stack app created with MERN stack, which aims to help simplify the process of discovering stocks to purchase. By leveraging the SEC's 13f filings, I've consolidated the recent holdings of some of my favourtie portfolio managers into a concise manner with which I can gain insight into the stock market. </p>
                
                <p>I plan on deploying this, as well as adding portfolio tracking for users, where they can make an account and log their portfolio, as well as their watch list.  </p>
                
                <div className='project-image__container'>
                 <img className='project-image' src="https://cdn.visual.com/images/9368dcb2-1921-49a0-b093-af3da1242b70.png" contenteditable="false" draggable="true"/><img/><br/>
                </div>
            </div>
        
    </div>
  )
}

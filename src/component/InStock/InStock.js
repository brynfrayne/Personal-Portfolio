import React from 'react'
import '../InvestLikeTheBest/InvestLikeTheBest.scss';
import gitLogo from '../../assets/Icons/gitblue.png';

export default function InStock() {
  return (
    <div className='project-card'>
      <div className='project-card__header'>
        <h3 class="project-card__title page-name">InStock</h3>
        <div className='github__box'>
          <a className='github__link' href='https://www.github.com/stuartkaija/instock'><img  className='github__icon'src={gitLogo} alt="" />/InStock</a>
        </div>
      </div>
        <div className='project-card__text'>
            <p>InStock is a full stack app which was created to help manage & track warehouse inventories across multiple locations. Users are able to add new warehouses, or items, track product details, or warehoues inventories. </p>
            
            <p>Working on a team of 4 remote developers, we created this app in a week's time, using an agile framework, Jira boards, and Github version control.</p>
            
            <div className='project-image__container'>
              <img className='project-image' src="https://cdn.visual.com/images/512bc250-e6b8-4d68-ab73-af254ea89dbc.png" alt=''/><br/>
            </div>
        </div>
        
    </div>
  )
}

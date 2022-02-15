import React from 'react'
import '../InvestLikeTheBest/InvestLikeTheBest.scss';

export default function InStock() {
  return (
    <div>
        <h3 class="heading">InStock</h3>
        <div>
            <div class="ProseMirror" contenteditable="false" tabindex="0">
                <p>InStock is a full stack app which was created to help manage & track warehouse inventories across multiple locations. Users are able to add new warehouses, or items, track product details, or warehoues inventories. </p>
                <p><br/></p>
                <p>Working on a team of 4 remote developers, we created this app in a week's time, using an agile framework, Jira boards, and Github version control.</p>
                <p><br/></p>
                <p>
                 <img className='project-image' src="https://cdn.visual.com/images/512bc250-e6b8-4d68-ab73-af254ea89dbc.png" contenteditable="false" draggable="true"/><img/><br/>
                </p>
        </div></div>
    </div>
  )
}

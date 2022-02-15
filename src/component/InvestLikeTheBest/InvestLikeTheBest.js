import React from 'react'
import './InvestLikeTheBest.scss';

export default function InvestLikeTheBest() {
  return (
    <div>
        <h3 class="heading">Invest Like The Best</h3>
        <div>
            <div class="ProseMirror" contenteditable="false" tabindex="0">
                <p>Invest Like The Best is a full stack app created with MERN stack, which aims to help simplify the process of discovering stocks to purchase. By leveraging the SEC's 13f filings, I've consolidated the recent holdings of some of my favourtie portfolio managers into a concise manner with which I can gain insight into the stock market. </p>
                <p><br/></p>
                <p>I plan on deploying this, as well as adding portfolio tracking for users, where they can make an account and log their portfolio, as well as their watch list.  </p>
                <p><br/></p>
                <p>
                 <img className='project-image' src="https://cdn.visual.com/images/9368dcb2-1921-49a0-b093-af3da1242b70.png" contenteditable="false" draggable="true"/><img/><br/>
                </p>
        </div></div>
    </div>
  )
}

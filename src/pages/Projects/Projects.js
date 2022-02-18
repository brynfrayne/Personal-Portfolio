import React from 'react'
import InvestLikeTheBest from '../../component/InvestLikeTheBest/InvestLikeTheBest';
import InStock from '../../component/InStock/InStock';
import './Projects.scss';

export default function Portfolio() {
  return (
    <div className='projects'>
    <InvestLikeTheBest className='project-card'/>
    <InStock className='project-card'/> 
        
    </div>
  )
}

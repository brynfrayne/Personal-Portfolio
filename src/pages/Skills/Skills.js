import React from 'react'
import './Skills.scss';
import reactLogo from '../../assets/Icons/React.c60e0724.svg'
import nodeExpressLogo from '../../assets/iconsSVG/node-js-white.svg'
import sassLogo from '../../assets/iconsSVG/sass.svg'
import mysqlLogo from '../../assets/iconsSVG/mysql-white.svg'
import expressLogo from '../../assets/iconsSVG/express.svg'
import jsLogo from '../../assets/Icons/JavaScript.cb6c28ae.svg'
import htmlLogo from '../../assets/Icons/HTML.8af6948d.svg'
import gitLogo from '../../assets/Icons/Git.fff69573.svg'
import cssLogo from '../../assets/Icons/Css.bba0846c.svg'




export default function Skills() {
  return (
    <div className='skills'>
        
        <div class="skills__imgDiv">
        <h3 className='skills__title'>Tech Stack</h3>
            <div class="skills__imgCard">
                <img class="skills__img" src={reactLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img skills__img--node" src={nodeExpressLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={sassLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={mysqlLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={expressLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={jsLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={htmlLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={gitLogo} alt=""/>
            </div>
            <div class="skills__imgCard">
                <img class="skills__img" src={cssLogo} alt=""/>
            </div>
        </div>
    </div>
  )
}

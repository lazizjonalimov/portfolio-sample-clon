import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header id='home'>
        <div className="container header__container"> 
        <h5>Hi, I'm </h5>
        <h1 id='new_font'>Lazizjon Alimov</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="Me" />
          </div>
          <a href="#contact" class='scroll__down'>
              Scroll Down
          </a>
        </div>
    </header>
);
}

export default Header
import React from 'react'
import './footer.css'
import {SiInstagram} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import { SlSocialTwitter } from 'react-icons/sl'
import {FiLinkedin} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LAZIZJON ALIMOV</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#feedbacks">Feedbacks</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/lazizjonalimov/"><SiInstagram/></a>
        <a href="https://github.com/lazizjonalimov"><BsGithub/></a>
        <a href="https://twitter.com/lazizjonalimov"><SlSocialTwitter/></a>
        <a href="https://www.linkedin.com/in/lazizjonalimov/"><FiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LAZIZJON ALIMOV. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
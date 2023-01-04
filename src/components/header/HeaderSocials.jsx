import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header socials'>
      <a href="https://www.linkedin.com/in/lazizjonalimov" target="_blank"><BsLinkedin/></a>
      <a href="https://www.github.com/lazizjonalimov" target="_blank"><FaGithub/></a>
      <a href="https://www.twitter.com/lazizjonalimov" target="_blank"><AiFillTwitterCircle/></a>

    </div>
  )
}

export default HeaderSocials
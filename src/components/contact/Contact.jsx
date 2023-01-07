import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohji5bo', 'template_htqtzr5', form.current, 'zpoSGnee99qaDn-Bh')
    
    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>lazizjonalimov</h5>
            <a href="https://m.me.com/lazizjonalimov" >Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>lazizjonalimov</h5>
            <a href="https://api.whatsapp.com/send?phone=+19839303393">Send a message</a>
          </article>

        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
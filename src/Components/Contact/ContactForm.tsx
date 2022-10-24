import React from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider'
//Css
import './ContactForm.css'
//Images
import messageImg from '../../assets/images/contact-img-mobile.png'

export const ContactForm = () => {
  return (
    <section className='contact'>
      <SectionDivider section='Contact' />
      <div className='contact__headings'>
        <h2>Do you need a website or web application? Tell me about your next proyect</h2>
        <h3>I am currently available for work</h3>
      </div>
      <form className='contact__form'>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" id="" cols={30} rows={10}></textarea>
        <button type='submit'>Send Inquiry</button>
      </form>
      <img src="" alt="" />
    </section>
  )
}

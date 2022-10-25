import React from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider'
//Css
import './ContactForm.css'
//Images
import messageImg from '../../assets/images/contact-img-mobile.png'
import messageImgDesktop from '../../assets/images/contact-desktop.png'
import messageIcon from '../../assets/icons/message.svg'
//Custom Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'

export const ContactForm = () => {

  const isMobile = useIsMobile();

  const submitForm = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <section className='contact'>
      <div className='contact__main'>
        <SectionDivider section='Contact' />
        <div className='contact__headings'>
          <h2>Tell me about your next project.</h2>
          <h3>Currently available for work</h3>
        </div>
        <form className='contact__form'>
          <input type="text" name="field1" placeholder='Name' autoComplete='chrome-off”' />
          <input type="email" name="field2" placeholder='Email' autoComplete='chrome-off”'/>
          <textarea name="message" id="" cols={50} rows={1} placeholder="Describe your project"></textarea>
          <button className='contact__btn' onClick={submitForm} >
            <img src={messageIcon} alt="" />
            Send Inquiry
          </button>
        </form>
      </div>
      <img src={isMobile? messageImg : messageImgDesktop } alt="" className='contact__img'/>
    </section>
  )
}

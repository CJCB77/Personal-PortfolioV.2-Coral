import React from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider'
//Css
import './ContactForm.css'
//Images
import messageImg from '../../assets/images/contact-img-mobile.png'
import messageImgDesktop from '../../assets/images/contact-desktop.png'
import messageIcon from '../../assets/icons/message.svg'
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
import {useSpring, animated} from 'react-spring'
import {useInterventionObserver} from '../../CustomHooks/useInterventionObserver'

export const ContactForm = () => {

  const isMobile = useIsMobile();

  const submitForm = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  //Create an intersection observer to trigger animation when h2 and h3 element is visible
  const h2Ref = React.useRef(null);
  const h3Ref = React.useRef(null);

  const h2Entry = useInterventionObserver(h2Ref, {
    threshold: 0.15,
    freezeOnceVisible: true
  });

  const h3Entry = useInterventionObserver(h3Ref, {
    threshold: 0.15,
    freezeOnceVisible: true
  });

  const h2Props = useSpring({
    opacity: h2Entry?.isIntersecting ? 1 : 0,
    transform: h2Entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 300}
  })

  const h3Props = useSpring({
    opacity: h3Entry?.isIntersecting ? 1 : 0,
    transform: h3Entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 300}
  })

  //Create an intersection observer to trigger animation for image element when visible
  const imgRef = React.useRef(null);
  const imgEntry = useInterventionObserver(imgRef, {
    threshold: 0.4,
    freezeOnceVisible: true
  });


  //Props animation fadeIn
  const fadeInImg = useSpring({
    opacity: imgEntry?.isIntersecting ? 1 : 0,
    config: {duration: 300}
  })


  //Create intersection observer to trigger animation for form  when visible
  const formRef = React.useRef(null);
  const formEntry = useInterventionObserver(formRef, {
    threshold: 0.4,
    freezeOnceVisible: true
  });

  const formProps = useSpring({
    opacity: formEntry?.isIntersecting ? 1 : 0,
    transform: formEntry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 300}
  })

  return (
    <section className='contact'>
      <div className='contact__main'>
        <SectionDivider section='Contact' />
        <div className='contact__headings'>
          <animated.h2 ref={h2Ref} style={h2Props} >Tell me about your next project.</animated.h2>
          <animated.h3 ref={h3Ref} style={h3Props}>Currently available for work</animated.h3>
        </div>
        <animated.form ref={formRef} style={formProps} className='contact__form'>
          <input type="text" name="field1" placeholder='Name' autoComplete='chrome-off”' />
          <input type="email" name="field2" placeholder='Email' autoComplete='chrome-off”'/>
          <textarea name="message" id="" cols={50} rows={1} placeholder="Describe your project"></textarea>
          <button className='contact__btn' onClick={submitForm} >
            <img src={messageIcon} alt="" />
            Send Inquiry
          </button>
        </animated.form>
      </div>
      <animated.img ref={imgRef} src={isMobile? messageImg : messageImgDesktop } style={fadeInImg} 
        alt="sending message image" className='contact__img'/>
    </section>
  )
}

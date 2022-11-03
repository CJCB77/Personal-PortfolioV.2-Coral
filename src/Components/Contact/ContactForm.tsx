import {useRef,useState} from 'react'
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
//Emailjs
import emailjs from '@emailjs/browser';
import FadeUpIntersection from '../Animations/FadeUpIntersection'

//Message type
interface Message {
  user_name: string;
  user_email: string;
  message: string;
}

const ContactForm = () => {

  const [message,setMessage] = useState<Message>({user_name: "", user_email: "", message: ""});
  const isMobile = useIsMobile();

  const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = event.target
    setMessage({...message,[name]:value})
  }

  const submitForm = (e:React.FormEvent) => {
    e.preventDefault();
    setMessage({user_name:"",user_email:"",message:""})
    emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'xQwF2F-ePc3H0WpFQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } 

  //Create an intersection observer to trigger animation for image element when visible
  const imgRef = useRef(null);
  const imgEntry = useInterventionObserver(imgRef, {
    threshold: 0.4,
    freezeOnceVisible: true
  });

  //Props animation fadeIn
  const fadeInImg = useSpring({
    opacity: imgEntry?.isIntersecting ? 1 : 0,
    config: {duration: 300}
  })

  return (
    <section className='contact' id='contact'>
      <div className='contact__main'>
        <SectionDivider section='Contact' />
        <div className='contact__headings'>
          <FadeUpIntersection >
            <h2>Tell me about your next project.</h2>
          </FadeUpIntersection>
          <FadeUpIntersection threshold={0.4}>
            <h3>Currently available for work</h3>
          </FadeUpIntersection>
        </div>
        <FadeUpIntersection threshold={0.4}>
          <form className='contact__form' onSubmit={submitForm}>
            <input type="text" name="user_name" value={message.user_name} onChange={handleChange} placeholder='Name' autoComplete='chrome-off”' />
            <input type="email" name="user_email" value={message.user_email} onChange={handleChange} placeholder='Email' autoComplete='chrome-off”'/>
            <textarea name="message" value={message.message} onChange={handleChange} cols={50} rows={1} placeholder="Describe your project"></textarea>
            <button className='contact__btn'>
              <img src={messageIcon} alt="" />
              Send Inquiry
            </button>
          </form>
        </FadeUpIntersection>
      </div>
      <animated.img ref={imgRef} src={isMobile? messageImg : messageImgDesktop } style={fadeInImg} 
        alt="sending message image" className='contact__img'/>
    </section>
  )
}

export default ContactForm
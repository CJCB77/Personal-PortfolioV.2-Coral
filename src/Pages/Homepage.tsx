import React, {useEffect} from 'react'
//Components
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import { Technologies } from '../Components/Skills/Technologies';
import { Projects } from '../Components/Projects/Projects';
import { ContactForm } from '../Components/Contact/ContactForm';
import { Footer } from '../Components/Footer/Footer';
//Hooks
import useIsMobile from '../CustomHooks/useIsMobile';


export const Homepage = () => {

  const isMobile = useIsMobile();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY < 650) {
        document.body.classList.remove('bg--light-blue');
      }
      if(window.scrollY > 650) {
        document.body.classList.add('bg--light-blue');
      }
      if(window.scrollY > 2000) {
        document.body.classList.remove('bg--light-blue');
      }
      if(isMobile){
        if(window.scrollY > 4100) {
          document.body.classList.add('bg--light-blue');
        }

        if(window.scrollY > 5300) {
          document.body.classList.remove('bg--light-blue');
        }

      }else{
        if(window.scrollY > 3500) {
          document.body.classList.add('bg--light-blue');
        }

        if(window.scrollY > 4500) {
          document.body.classList.remove('bg--light-blue');
        }
      }
 
    })
  },[]);

  return (
    <section className='homepage'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <ContactForm/>
      <Footer />
    </section>
  )
}

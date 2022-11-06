import {Suspense, useEffect, lazy} from 'react'
//Components
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
//Hooks
import useIsMobile from '../CustomHooks/useIsMobile';
import Spinner from '../Components/UtilityComponents/Spinner';
//Lazy Loading
const About = lazy(() => import('../Components/About/About'));
const Technologies = lazy(() => import('../Components/Skills/Technologies'));
const Projects = lazy(() => import('../Components/Projects/Projects'));
const ContactForm = lazy(() => import('../Components/Contact/ContactForm'));
const Footer = lazy(() => import('../Components/Footer/Footer'));

const Homepage = () => {

  const isMobile = useIsMobile();

  function handleScroll() {
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

      if(window.scrollY > 4600) {
        document.body.classList.remove('bg--light-blue');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    //Remove scroll listener and remove bg--light-blue class
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('bg--light-blue');
    }
    
  },[]);

  return (
    <section className='homepage'>
      <Suspense fallback={<Spinner/>}>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
        <ContactForm/>
        <Footer />
      </Suspense>
    </section>
  )
}

export default Homepage

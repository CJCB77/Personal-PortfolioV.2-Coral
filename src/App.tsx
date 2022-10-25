import React, { useEffect } from 'react';
//Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import { Technologies } from './Components/Skills/Technologies';
import { Projects } from './Components/Projects/Projects';
import { ContactForm } from './Components/Contact/ContactForm';
//Nomralize.css
import './Normalize.css';
//CSS
import './App.css';
import { Footer } from './Components/Footer/Footer';


function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if(window.scrollY < 650) {
        document.body.classList.remove('bg--light-blue');
      }
      if(window.scrollY > 650) {
        document.body.classList.add('bg--light-blue');
      }
      if(window.scrollY > 2000) {
        document.body.classList.remove('bg--light-blue');
      }
      if(window.scrollY > 3500) {
        document.body.classList.add('bg--light-blue');
      }
      if(window.scrollY > 4500) {
        document.body.classList.remove('bg--light-blue');
      }
    })
  },[window.scrollY]);

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
//Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
//Nomralize.css
import './Normalize.css';
//CSS
import './App.css';


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

import React from 'react';
//Nomralize.css
import './Normalize.css';
//CSS
import './App.css';
import { Homepage } from './Pages/Homepage';
import {Route,Routes} from 'react-router-dom';
import { MeterProject } from './Pages/MeterProject';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/energy-meter-ocr' element={<MeterProject />} />
      </Routes>
    </div>
  );
}

export default App;

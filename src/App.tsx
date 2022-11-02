import React from 'react';
//Nomralize.css
import './Normalize.css';
//CSS
import './App.css';
import { Homepage } from './Pages/Homepage';
import {Route,Routes} from 'react-router-dom';
import { MeterProject } from './Pages/MeterProject';
import InventoryProject from './Pages/InventoryProject';
import { ClothingStore } from './Pages/ClothingStore';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/energy-meter-ocr' element={<MeterProject />} />
        <Route path='/inventory-system' element={<InventoryProject />} />
        <Route path='/online-store' element={<ClothingStore />} />
      </Routes>
    </div>
  );
}

export default App;

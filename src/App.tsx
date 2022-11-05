import { Suspense,lazy } from 'react';
//Nomralize.css
import './Normalize.css';
//CSS
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Spinner from './Components/UtilityComponents/Spinner';
const Homepage = lazy(() => import ('./Pages/Homepage'));
const MeterProject = lazy(() => import ('./Pages/MeterProject'));
const InventoryProject = lazy(() => import ('./Pages/InventoryProject'));
const ClothingStoreProject = lazy(() => import ('./Pages/ClothingStore'));
const AnimalRescueProject = lazy(() => import ('./Pages/AnimalRescueProject'));


function App() {

  return (
    <div className="App">
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/energy-meter-ocr' element={<MeterProject />} />
          <Route path='/inventory-system' element={<InventoryProject />} />
          <Route path='/online-store' element={<ClothingStoreProject />} />
          <Route path='/animal-rescue' element={<AnimalRescueProject />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

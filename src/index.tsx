import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Router
import { BrowserRouter} from "react-router-dom";
import { ScrollToTop } from './Components/UtilityComponents/ScrollToTop';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);


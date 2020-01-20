import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter , HashRouter} from 'react-router-dom';

import MasterLayout from './components/pages/MasterLayout';


function App() {
  return (
    <BrowserRouter>
      <MasterLayout />
    </BrowserRouter>
  );
}

export default App;

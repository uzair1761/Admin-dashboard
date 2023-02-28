import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { darkMOde_context } from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <darkMOde_context>
    <App />
    </darkMOde_context>
  </React.StrictMode>
  
);


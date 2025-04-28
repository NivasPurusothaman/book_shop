import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../node_modules/primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import 'primeicons/primeicons.css';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

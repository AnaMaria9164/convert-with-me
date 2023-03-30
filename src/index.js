import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const app_base = ReactDOM.createRoot(document.getElementById('app_base'));
app_base.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
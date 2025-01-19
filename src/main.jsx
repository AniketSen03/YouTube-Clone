import React from 'react';
import { createRoot } from 'react-dom/client'; // Correctly import createRoot
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); // Initialize createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

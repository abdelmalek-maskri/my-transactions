// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import RouterComponent from './router';  // Import the RouterComponent
import { AuthContextProvider } from './context/AuthContext';  // Import the context provider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterComponent />
    </AuthContextProvider>
  </StrictMode>

);

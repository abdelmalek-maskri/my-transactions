// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import RouterComponent from './router';  // Import the RouterComponent
import { AuthContextProvider } from './context/AuthContext';  // Import the context provider
import './index.css';

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <RouterComponent />
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById('root')
);

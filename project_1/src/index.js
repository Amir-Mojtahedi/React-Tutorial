import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; 
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <MainContent />
    </div>
  </React.StrictMode>
);


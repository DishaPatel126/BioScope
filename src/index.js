import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom';
import './style.css';
import Home from './components/Home';
import NotFound from './components/not-found';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

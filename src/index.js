import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App'
import Store from './components/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/store' element={<Store/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

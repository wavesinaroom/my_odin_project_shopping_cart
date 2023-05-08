import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App'
import Store from './components/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" component={<App/>}/>
      <Route exact path="/store" component={<Store/>}/>
    </HashRouter>
  </React.StrictMode>
);

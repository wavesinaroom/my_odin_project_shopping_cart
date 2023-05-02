import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

const App = ()=> {
    
  return (
    <>
      <h1>Welcome to the VST store</h1>
      <Link to='/store'><button>Enter</button></Link>
    </>
  );
}

export default App;

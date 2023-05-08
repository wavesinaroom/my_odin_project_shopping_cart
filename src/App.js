import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

const App = ()=> {
    
  document.title = 'VST store';
  return (
    <div style={div}>
      <h1 style={header}>Welcome to the VST store</h1>
      <Link to='/store'><button>Enter</button></Link>
    </div>
  );
}

export default App;

const div = {
  display:'flex',
  flexDirection:'column',
  position: 'absolute',
  left: '20vw',
  top: '50vh'
}

const header = {
  marginBottom: '3em'
}

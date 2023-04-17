import './App.css';
import React, {useState} from 'react';
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import uniqid from 'uniqid'


const App = ()=> {
  const [items,setItems] = useState(Items);

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div data-testid='items-display' className='display'>
        {items.map((item)=>
          <Item key={uniqid()} details={item}/>
        )}
      </div>
    </>
  );
}

export default App;

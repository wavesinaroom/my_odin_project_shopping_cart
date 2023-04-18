import './App.css';
import React, {useState} from 'react';
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import uniqid from 'uniqid'


const App = ()=> {
  const [items,setItems] = useState(Items);
  const [cart,setCart] = useState([]);

  const addItemToCart = (info)=>{
    let isInCart = false;
    cart.forEach((item)=>{
      if(item===info)
        isInCart=true;
    });
    
    if(!isInCart)
      setCart([...cart,info]);
  } 

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div data-testid='items-display' className='display'>
        {items.map((item)=>
          <Item key={uniqid()} details={item} addCart={addItemToCart}/>
        )}
      </div>
    </>
  );
}

export default App;

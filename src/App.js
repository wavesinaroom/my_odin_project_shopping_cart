import './App.css';
import React, {useState} from 'react';
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import uniqid from 'uniqid'
import Cart from './components/cart';


const App = ()=> {
  const items = Items;
  const [isCartRendered, setIsCarRendered] = useState(false);
  const [cart, setCart] = useState([]);

  function addItem (info){
    setCart(...cart,info);
  }

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div className='cart'>
        <img alt='cart-icon' onClick={()=>{setIsCarRendered(!isCartRendered)}}></img>
        <Cart setCart={setCart} cart={cart}  isRendered={isCartRendered}/>
      </div>
      <div data-testid='items-display' className='display'>
        {items.map((item)=>
          <Item key={uniqid()} details={item} setCart={()=>info => addItem(info)}/>
        )}
      </div>
    </>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import uniqid from 'uniqid'
import Cart from './components/cart';


const App = ({inputCart})=> {
  const items = Items;
  const [isCartRendered, setIsCarRendered] = useState(false);

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div className='cart'>
        <img alt='cart-icon' onClick={()=>{setIsCarRendered(!isCartRendered)}}></img>
        <Cart cart={inputCart}  isRendered={isCartRendered}/>
      </div>
      <div data-testid='items-display' className='display'>
        {items.map((item)=>
          <Item key={uniqid()} details={item} cart={inputCart}/>
        )}
      </div>
    </>
  );
}

export default App;

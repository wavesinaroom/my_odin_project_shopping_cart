import './App.css';
import React, {useState} from 'react';
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import uniqid from 'uniqid'
import Cart from './components/cart';


const App = ()=> {
  const [items,setItems] = useState(Items);
  const [cart,setCart] = useState([]);
  const [isCartRendered, setIsCarRendered] = useState(false);

  const addItemToCart = (info)=>{
    let isInCart = false;
    cart.forEach((item)=>{
      if(item===info)
        isInCart=true;
    });
    
    if(!isInCart)
      setCart([...cart,info]);
  } 

  const removeItemFromCart = (info)=>{
    setCart(cart.filter(item => item.name !== info.name));
  }

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div className='cart'>
        <img alt='cart-icon' onClick={()=>{setIsCarRendered(!isCartRendered)}}></img>
        <Cart cart={cart} removeCart={removeItemFromCart} isRendered={isCartRendered}/>
      </div>
      <div data-testid='items-display' className='display'>
        {items.map((item)=>
          <Item key={uniqid()} details={item} addCart={addItemToCart}/>
        )}
      </div>
    </>
  );
}

export default App;

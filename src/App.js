import './App.css';
import React, {useState} from 'react';
import uniqid from 'uniqid'
import Items from './components/itemsList.json' //pic,name,description,type,price
import Item from './components/item';
import ItemPanel from './components/itemPanel';
import Cart from './components/cart';


const App = ()=> {
  const [isCartRendered, setIsCarRendered] = useState(false);
  const [cart, setCart] = useState([]);
  const [item,setItem] = useState(null);
  const [showInfo,setShowInfo] = useState(false);

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div className='cart'>
        <img alt='cart-icon' onClick={()=>{setIsCarRendered(!isCartRendered)}}></img>
        <Cart setCart={setCart} cart={cart}  isRendered={isCartRendered}/>
      </div>
      <div data-testid='items-display' className='display'>
        {Items.map((item)=>
          <Item key={uniqid()} item={item} setItem={setItem}/>
        )}
      </div>
      <ItemPanel item={item} setCart={setCart} show={showInfo} onClickOutside={()=>{setShowInfo(false)}}/>   
    </>
  );
}

export default App;

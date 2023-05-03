import React, { useState } from 'react';
import uniqid from 'uniqid'
import Items from './itemsList.json' //pic,name,description,type,price
import Item from './item';
import ItemPanel from './itemPanel';
import Cart from './cart';


const Store = ()=> {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [item,setItem] = useState(null);

  function remove(target){
    setCart(cart.filter(item=> item.name !== target.item.name))
  }

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div data-testid='cart-display' className='cart'>
        <Cart setCart={target=>(remove(target))} cart={cart}/>
      </div>
      <div data-testid='items-display' className='display'>
        {Items.map((item)=>
          <Item key={uniqid()} item={item} setItem={setItem}  openPanel={()=>{setIsModalOpen(true)}}/>
        )}
      </div>
      <ItemPanel item={item} setCart={setCart} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
}

export default Store;

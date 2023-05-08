import './store.css'
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
  
  const headerDiv = {
    display: 'flex',
    flexDirection: 'row ',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    marginTop: '3em',
    borderStyle: 'dashed',
    borderLeft: 'none',
    borderRight: 'none'
  }

  const headerTitle = {
    fontSize: '5vh'
  }
  

  const display = {
    display: 'grid',  
    gridTemplateColumns: 'repeat(5, 17vw)',
    gridTemplateRows:  'repeat(3, 25vh)',
    borderBottom: 'dashed 2px',
  }

  return (
    <div className='store'>
      <div style={headerDiv}> 
        <h1 style={headerTitle} data-testid='main-title'>VST shop</h1>
        <Cart setCart={target=>(remove(target))} cart={cart}/>
      </div>
          <div style={display} data-testid='items-display'>
          <ItemPanel item={item} setCart={setCart} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            {Items.map((item)=>
              <Item key={uniqid()} item={item} setItem={setItem}  openPanel={()=>{setIsModalOpen(true)}}/>
            )}
        </div>
    </div>
  );
}

export default Store;

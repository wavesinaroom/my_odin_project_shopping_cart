import React, {useEffect, useState, useRef} from 'react';
import uniqid from 'uniqid'
import Items from './itemsList.json' //pic,name,description,type,price
import Item from './item';
import ItemPanel from './itemPanel';
import Cart from './cart';


const Store = ()=> {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [item,setItem] = useState(null);
  useOnClickOutside(ref, ()=>setIsModalOpen(false));

  function useOnClickOutside(ref, handler){
    useEffect(()=>{
      const listener = (event)=>{
        if(!ref.current || ref.current.contains(event.target))
          return;
        handler(event);
      }
      document.addEventListener(`mousedown`, listener);
      document.addEventListener(`touchstart`, listener);

      return()=>{
        document.removeEventListener(`mousedown`, listener);
        document.removeEventListener(`touchstart`, listener);
      }
    },[ref,handler]
    );
  }

  return (
    <>
      <h1 data-testid='main-title'>VST shop</h1>
      <div className='cart'>
        <Cart setCart={setCart} cart={cart}/>
      </div>
      <div data-testid='items-display' className='display'>
        {Items.map((item)=>
          <Item key={uniqid()} item={item} setItem={setItem}  openPanel={()=>{setIsModalOpen(true)}}/>
        )}
      </div>
      {isModalOpen?
      <ItemPanel item={item} setCart={setCart} ref={ref}/>:null}
    </>
  );
}

export default Store;

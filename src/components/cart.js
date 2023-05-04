//use collapsible here
import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useEffect, useRef, useState} from 'react';

const Cart = ({setCart, cart})=>{
  const ref = useRef();
  const renderedCart = cart;
  const total = cart.reduce((sum, item)=> sum+= item.price,0);
  const [isRendered, setIsRendered] = useState(false);
  const [isNotified, setIsNotified] = useState(false);
  const [back, setBack] = useState(false)
  useOnClickOutside(ref, ()=> setIsRendered(false));

  function checkOut (){
    setIsNotified(true);
  }

  function backToMain(){
    setBack(true);
  }

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

  if(back){
    return(
      <>
        <img alt='cart-icon' onClick={()=>{setIsRendered(true)}}></img>
      </>
    ) 

  }

  if(isNotified){
    return(
    <div className="cart-items">
      <p>Thanks for shopping at VST store</p>
      <button onClick={()=>{backToMain();}}>Back</button>
    </div>
    );
  }
  
  return(
    <>
      <img alt='cart-icon' onClick={()=>{setIsRendered(true)}}></img>
      {isRendered?
      (<div ref={ref} className="cart-items">
        {renderedCart.map((purchase)=>
          <CartItem key={uniqid()} item={purchase} setCart={setCart}/>
        )}
        <button onClick={()=>{checkOut();}}>Checkout</button>
        <button onClick={()=>{backToMain();}}>Back</button>
        <div className='cart-total'>
          <p>Total</p>
          <p data-testid='total-price'>{total}</p>
        </div>
      </div>):(null)}
    </>
  );
}
export default Cart;

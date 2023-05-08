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
    setIsRendered(false);
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



  if(isNotified){
    return(
    <div>
      <img style={img} alt='cart-icon' onClick={()=>{setIsRendered(true)}}></img>
      <p>Thanks for shopping at VST store</p>
    </div>
    );
  }
  
  return(
    <div data-testid='cart-display' style={div}>
      <img style={img} alt='cart-icon' onClick={()=>{setIsRendered(true)}}></img>
      {isRendered?
      (<div ref={ref} style={cartItems}>
        {renderedCart.map((purchase)=>
          <CartItem key={uniqid()} item={purchase} setCart={setCart}/>
        )}
        <div style={result}>
          <p style={{fontWeight:'bolder'}}>Total</p>
          <p style={{fontWeight:'bolder'}} data-testid='total-price'>{total}</p>
        </div>
        <div style={bottom}>
          <button style={button} onClick={()=>{checkOut();}}>Checkout</button>
          <button style={button} onClick={()=>{backToMain();}}>Back</button>
        </div>
      </div>):(null)}
    </div>
  );
}
export default Cart;

const img = {
  content: `url('https://img.icons8.com/?size=512&id=QVQY51sDgy1I&format=png')`,
  width: '64px',
  height:'64px' 
}

const div = {
  position: 'relative',
  left: '7vw',
}

const cartItems = {
  position:'absolute',
  backgroundColor: 'white',
  paddingRight: '2vw'
}

const result = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginRight: '0.5vw',
}

const bottom = {
  display:'flex',
}

const button = {
  fontSize: '16px',
}


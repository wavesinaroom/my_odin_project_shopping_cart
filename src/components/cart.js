import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useEffect, useState} from 'react';

const Cart = ({setCart, cart, isRendered})=>{
  const renderedCart = cart;
  const [isNotified, setIsNotified] = useState(false);
  const [back, setBack] = useState(false)
  const [total, setTotal] = useState(0)

  function checkOut (){
    setIsNotified(true);
  }

  function backToMain(){
    setBack(true);
  }

  useEffect(()=>{
  });

  if(!isRendered||back)
    return null;

  if(isNotified){
    return(
    <div className="cart-items">
      <p>Thanks for shopping at VST store</p>
      <button onClick={()=>{backToMain();}}>Back</button>
    </div>
    );
  }
  
  return(
    <div className="cart-items">
      {renderedCart.map((purchase)=>
        <CartItem key={uniqid()} item={purchase} setCart={setCart}/>
      )}
      <button onClick={()=>{checkOut();}}>Checkout</button>
      <button onClick={()=>{backToMain();}}>Back</button>
      <div className='cart-total'>
        <p>Total</p>
        <p data-testid='total-price'>{total}</p>
      </div>
    </div>
  );
}
export default Cart;

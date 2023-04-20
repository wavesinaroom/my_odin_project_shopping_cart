import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useEffect, useState} from 'react';

const Cart = ({cart, removeCart, isRendered})=>{
  const [isNotified, setIsNotified] = useState(false);
  const [back, setBack] = useState(false)
  const [total, setTotal] = useState(cart.reduce((value,item)=>value+=item.price,0));

  const checkOut = ()=>{
    setIsNotified(true);
  }

  const backToMain = ()=>{
    setBack(true);
  }

  useEffect(()=>{
    setTotal(cart.reduce((value, item)=> value+=item.price,0));
  },[cart, total])

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
      {cart.map((purchase)=>
        <CartItem key={uniqid()} item={purchase} removeCart={()=>{removeCart()}}/>
      )}
      <button onClick={()=>{checkOut();}}>Checkout</button>
      <button onClick={()=>{backToMain();}}>Back</button>
      <div className='cart-total'>
        <p>Total</p>
        <p>{total}</p>
      </div>
    </div>
  );
}
export default Cart;

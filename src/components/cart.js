import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useState} from 'react';

const Cart = ({cart, removeCart, isRendered})=>{
  const [isNotified, setIsNotified] = useState(false);
  const [back, setBack] = useState(false)

  const checkOut = ()=>{
    setIsNotified(true);
  }

  const backToMain = ()=>{
    setBack(true);
  }

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
    </div>
  );
}
export default Cart;

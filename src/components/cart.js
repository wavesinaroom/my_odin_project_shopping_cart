import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useState} from 'react';

const Cart = ({cart, removeCart, isRendered})=>{
  const [isNotified, setIsNotified] = useState(false);

  const checkOut = ()=>{
    setIsNotified(true);
  }

  if(!isRendered)
    return null;


  if(isNotified){
    return(
    <div className="cart-items">
      <p>Thanks for shopping at VST store</p>
      <button>Back</button>
    </div>
    );
  }
  
  return(
    <div className="cart-items">
      {cart.map((purchase)=>
        <CartItem key={uniqid()} item={purchase} removeCart={()=>{removeCart()}}/>
      )}
      <button onClick={()=>{checkOut();}}>Checkout</button>
      <button>Back</button>
    </div>
  );
}
export default Cart;

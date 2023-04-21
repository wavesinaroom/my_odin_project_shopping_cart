import CartItem from './cartItem'
import uniqid from 'uniqid'
import {useEffect, useState} from 'react';

const Cart = ({inputCart, isRendered})=>{
  const [cart, setCart] = useState(inputCart); 
  const [isNotified, setIsNotified] = useState(false);
  const [back, setBack] = useState(false)
  const [total, setTotal] = useState(cart.reduce((value,item)=>value+=item.price,0));

  function checkOut (){
    setIsNotified(true);
  }

  function backToMain(){
    setBack(true);
  }

  function removeCart(info){
    setCart(cart.filter(item => item.name !== info.name));
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
        <CartItem key={uniqid()} item={purchase} removeCart={item => removeCart(item)}/>
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

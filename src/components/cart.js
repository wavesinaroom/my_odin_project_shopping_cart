import CartItem from './cartItem'
import uniqid from 'uniqid'

const Cart = ({cart, removeCart, isRendered})=>{
  if(!isRendered)
    return null;

  return(
    <div className="cart-items">
      {cart.map((purchase)=>
          <CartItem key={uniqid()} item={purchase} removeCart={()=>{removeCart()}}/>
      )};
      <button>Checkout</button>
      <button>Back</button>
    </div>
  );
}
export default Cart;

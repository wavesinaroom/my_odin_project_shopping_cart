const CartItem = ({item,removeCart})=>{
  return(
    <div className="cart-item">
      <button onClick={()=>{removeCart()}}>-</button>
      <img src={item.pic} alt={item.name}></img>
      <h4>{item.name}</h4>
      <p>{item.price}</p>
    </div>
  );
}

export default CartItem;

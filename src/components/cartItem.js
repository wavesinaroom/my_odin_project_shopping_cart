const CartItem = ({item,removeCart})=>{
  return(
    <div className="cart-item">
      <button data-testid={item.name} onClick={()=>{removeCart({item})}}>-</button>
      <img src={item.pic} alt={item.name}></img>
      <h4>{item.name}</h4>
      <p>{item.price}</p>
    </div>
  );
}

export default CartItem;

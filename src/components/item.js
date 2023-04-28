const Item = ({item, setItem})=>{

  function handleSetItem(){
    setItem(item);
  }

  return(
    <div className='item' data-testid='item-test'>
      <h4>{item.name}</h4>
      <img src={item.pic} alt={item.name} onClick={()=>{handleSetItem();}}></img> 
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );

}
export default Item;

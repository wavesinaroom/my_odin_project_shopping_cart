import ItemPanel from "./itemPanel";

const Item = ({item,addCart})=>{

  return(
    <div className='item' data-testid='item-test'>
      <h4>{item.name}</h4>
      <ItemPanel item={item} addCart={addCart}/> 
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );

}
export default Item;

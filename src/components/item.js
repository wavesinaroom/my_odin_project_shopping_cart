import ItemPanel from "./itemPanel";

const Item = ({details,setCart})=>{

  return(
    <div className='item' data-testid='item-test'>
      <h4>{details.name}</h4>
      <ItemPanel info={details} setCart={setCart}/> 
      <p>{details.description}</p>
      <p>{details.price}</p>
    </div>
  );

}
export default Item;

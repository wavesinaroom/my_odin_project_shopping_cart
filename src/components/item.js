const Item = ({details})=>{

  return(
    <div className='item' data-testid='item-test'>
      <h4>{details.name}</h4>
      <img src={details.pic} alt={details.name}></img> 
      <p>{details.description}</p>
      <p>{details.price}</p>
    </div>
  );

}
export default Item;

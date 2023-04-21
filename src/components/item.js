import {Link} from "react-router-dom";

const Item = ({details,cart})=>{

  return(
    <div className='item' data-testid='item-test'>
      <h4>{details.name}</h4>
      <Link to={{pathname:`/item`, state:{info:details, cart:cart}}}><img src={details.pic} alt={details.name}></img></Link> 
      <p>{details.description}</p>
      <p>{details.price}</p>
    </div>
  );

}
export default Item;

import {Link} from "react-router-dom";

const Item = ({details,addCart})=>{

  return(
    <div className='item' data-testid='item-test'>
      <h4>{details.name}</h4>
      <Link to={{pathname:`/item`, state:{info:details, func:addCart}}}><img src={details.pic} alt={details.name}></img></Link> 
      <p>{details.description}</p>
      <p>{details.price}</p>
    </div>
  );

}
export default Item;

  import {useState} from "react";
  import { Link } from "react-router-dom";

  const ItemPanel = ({info,cart}) => {
  //Add function implementation should be here instead. Bring cart as props.

    const [isAdded,setIsAdded] = useState(false);
    const [toCart, setToCart] = useState(cart);

    const add = ()=>{
      setToCart([...toCart, info]);
      setIsAdded(true);
    }
    return(
      <>
        <Link to={{pathname:`/`, state:{cart: toCart}}} ><button>X</button></Link>
        <img src={info.pic} alt={info.title}></img>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        {isAdded ? <p>Item added to cart</p>:null}
        {isAdded ? null:<button onClick={()=>{add()}}>Add</button>}
      </>
    )
  };

export default ItemPanel;





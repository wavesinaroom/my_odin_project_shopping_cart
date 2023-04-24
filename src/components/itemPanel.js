  import {useState} from "react";
  import { Link } from "react-router-dom";

  const ItemPanel = ({info,setCart}) => {

    const [isAdded,setIsAdded] = useState(false);

    const add = ()=>{
      setCart(cart => [...cart, info]);
      setIsAdded(true);
    }
    return(
      <>
        <Link to='/' ><button>X</button></Link>
        <img src={info.pic} alt={info.title}></img>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        {isAdded ? <p>Item added to cart</p>:null}
        {isAdded ? null:<button onClick={()=>{add()}}>Add</button>}
      </>
    )
  };

export default ItemPanel;





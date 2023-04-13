import {useState} from "react";
import { Link } from "react-router-dom";

const Item = ({info,addCart}) => {

  const [isAdded,setIsAdded] = useState(false);

  const add = ()=>{
    addCart({info});
    setIsAdded(true);
  }
  return(
    <>
      <Link to="/" ><button>&times</button></Link>
      <img src={info.pic} alt={info.title}></img>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      {isAdded ? <p>Item added to cart</p>:null}
      {isAdded ? null:<button onClick={()=>{add()}}>Add</button>}
    </>
  )
};

export default Item;





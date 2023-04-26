  import {useState} from "react";

  const ItemPanel = ({info, setCart}) => {

    const [isAdded,setIsAdded] = useState(false);

    const eventHandler = ()=>{
      setCart(info)
      setIsAdded(true);
    }
    return(
      <>
        <button>X</button>
        <img src={info.pic} alt={info.title}></img>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        {isAdded ? <p>Item added to cart</p>:null}
        {isAdded ? null:<button onClick={()=>{eventHandler()}}>Add</button>}
      </>
    )
  };

export default ItemPanel;





  import {useState} from "react";

  const ItemPanel = ({item, addCart}) => {

    const [isAdded,setIsAdded] = useState(false);
    const [close,setClose] = useState(false);

    const eventHandler = ()=>{
      addCart(item)
      setIsAdded(true);
    }

    if(close)
      return null;

    return(
      <>
        <button onClick={()=>{setClose(true)}}>X</button>
        <img src={item.pic} alt={item.title}></img>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        {isAdded ? <p>Item added to cart</p>:null}
        {isAdded ? null:<button onClick={()=>{eventHandler()}}>Add</button>}
      </>
    )
  };

export default ItemPanel;





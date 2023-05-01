import {useEffect, useRef, useState} from "react";

const ItemPanel = (props) => {

  const [isAdded,setIsAdded] = useState(false);
  const [close,setClose] = useState(false);
  const {item, setCart, onClickOutside} = props;
  const ref = useRef(null);

  function add(){
    setCart(cart => [...cart,item]);
    setIsAdded(true);
  }

  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(ref.current && !ref.current.contains(event.target))
        onClickOutside && onClickOutside();
    };
    document.addEventListener('click', handleClickOutside, true);
    return()=>{
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [onClickOutside]);

  if(close||!props.show)
    return null;
  
  return(
    <div ref={ref}>
      <button onClick={()=>{setClose(true)}}>X</button>
      <img src={item.pic} alt={item.title}></img>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {isAdded ? <p>Item added to cart</p>:null}
      {isAdded ? null:<button onClick={()=>{add();}}>Add</button>}
    </div>
  )
};

export default ItemPanel;





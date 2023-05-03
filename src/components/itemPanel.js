
import {useEffect, useRef, useState} from "react";

const ItemPanel = (props) => {

  const [isAdded,setIsAdded] = useState(false);
  const [close,setClose] = useState(false);
  const {item, setCart, isModalOpen, setIsModalOpen} = props;
  const ref = useRef();
  useOnClickOutside(ref, ()=>setIsModalOpen(false));

  function add(){
    setCart(cart=>[...cart,item]);
    setIsAdded(true);
  }

  function useOnClickOutside(ref, handler){
    useEffect(()=>{
      const listener = (event)=>{
        if(!ref.current || ref.current.contains(event.target))
          return;
        handler(event);
      }
      document.addEventListener(`mousedown`, listener);
      document.addEventListener(`touchstart`, listener);

      return()=>{
        document.removeEventListener(`mousedown`, listener);
        document.removeEventListener(`touchstart`, listener);
      }
    },[ref,handler]
    );
  }

  if(close)
    return null;
  
  return(
    <>
    {isModalOpen?
    (<div ref={ref}>
      <button onClick={()=>{setClose(true)}}>X</button>
      <img src={item.pic} alt={item.title}></img>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {isAdded ? <p>Item added to cart</p>:null}
      {isAdded ? null:<button onClick={()=>{add();}}>Add</button>}
    </div>):(null)
    }
  </>
  )};

export default ItemPanel;





import './itemPanel.css'
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

  if(close){
    return(
      <>
        <div style={divOff}></div>
      </>
    );
  }
  
  return(
    <>
    {isModalOpen?
    (<div style={divOn} ref={ref}>
      <img style={img} src={item.pic} alt={item.title}></img>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {isAdded ? <p>Item added to cart</p>:null}
      {isAdded ? null:<button onClick={()=>{add();}}>Add</button>}
    </div>):(<div style={divOff}></div>)
    }
  </>
  )};

export default ItemPanel;

/*Styles*/

const divOn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gridRow: '1/4',
  borderRight: 'dashed 2px',
  padding:'2em',
}

const divOff = {
  gridRow: '1/4'
}

const img = {
  marginTop: '2vh'
}

const x = {
  marginRight: '13vw'
}

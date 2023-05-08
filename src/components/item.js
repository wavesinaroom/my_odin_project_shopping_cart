import {useState} from "react";

const Item = ({item, setItem, openPanel})=>{

  const[isHover, setIsHover] = useState(false);

  function handleMouseEnter () {
    setIsHover(true);
  }

  function handleMouseLeave (){
    setIsHover(false);
  }

  function handleSetItem(){
    setItem(item);
    openPanel();
  }

  const img = {
    maxWidth: '280px',
    maxHeight: '560px',
    opacity: isHover? '1':'0.6',
    cursor: isHover? 'pointer':'default'
  }

  const div = {
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const p = {
    marginTop: '2em',
    fontWeight: 'bolder'
  }

  return(
    <div  style={div} className='item' data-testid='item-test'>
      <h4>{item.name}</h4>
      <img style={img} src={item.pic} alt={item.name} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>{handleSetItem();}}></img> 
      <p style={p}>$ {item.price}</p>
    </div>
  );

}
export default Item;

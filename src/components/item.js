import './item.css'
const Item = ({item, setItem, openPanel})=>{

  function handleSetItem(){
    setItem(item);
    openPanel();
  }

  return(
    <div  style={div} className='item' data-testid='item-test'>
      <h4>{item.name}</h4>
      <img style={img} src={item.pic} alt={item.name} onClick={()=>{handleSetItem();}}></img> 
      <p style={p}>$ {item.price}</p>
    </div>
  );

}
export default Item;

/*Styles*/

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

const img = {
  maxWidth: '280px',
  maxHeight: '560px'
}

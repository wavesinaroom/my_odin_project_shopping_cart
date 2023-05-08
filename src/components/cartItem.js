const CartItem = ({item, setCart})=>{

  return(
    <div style={div}>
      <button style={remove} data-testid={item.name} onClick={()=>setCart({item})}>-</button>
      <div style={product}>
        <h4>{item.name}</h4>
        <img style={img} src={item.pic} alt={item.name}></img>
      </div>
      <p style={{marginRight:'0.5vw'}}>{item.price}</p>
    </div>
  );
}

export default CartItem;

const div = {
  backGroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const img = {
  maxWidth: '140px',
  maxHeight: '280px'
}

const product = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '1vw',
  paddingLeft : '1vw',
  paddingBottom: '4vh'
}

const remove = {
  paddingRight: '0.7em',
  paddingLeft: '0.5em',
  paddingBottom: '0.2em',
  paddingTop: '0.2em',
}

import React from "react";

const Item = ({info},{addCart}) => {
  const closePanel = () =>{

  };

  return(
    <>
      <button onClick={closePanel}>X</button> 
      <img src={info.pic} alt={info.title}></img>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <button data-testid="add-item" onClick={()=>{addCart({info})}}>Add</button>
    </>
  )
};

export default Item;





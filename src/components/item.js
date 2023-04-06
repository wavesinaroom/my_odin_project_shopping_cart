import { Link } from "react-router-dom";
import React from "react";

const Item = ({info},{addCart}) => {

  return(
    <>
      <button><Link to="/">X</Link></button>
      <img src={info.pic} alt={info.title}></img>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <button data-testid="add-item" onClick={()=>{addCart({info})}}>Add</button>
    </>
  )
};

export default Item;





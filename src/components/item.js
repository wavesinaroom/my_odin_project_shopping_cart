import { Link } from "react-router-dom";
import React, {useCallback} from "react";

const Item = ({info},{addCart}) => {

  return(
    <>
      <img src={info.pic} alt={info.title}></img>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <button onClick={()=>{addCart(info)}}>Add</button>
    </>
  )
};

export default Item;





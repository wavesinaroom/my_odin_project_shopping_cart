import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App"
import ItemPanel from "./components/itemPanel";

const RouteSwitch = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/itemPanel" element={<ItemPanel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;

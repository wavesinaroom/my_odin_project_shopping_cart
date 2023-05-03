import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App"
import Store from "./components/store";

const RouteSwitch = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;

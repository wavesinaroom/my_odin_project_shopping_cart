import React from "react";
import { HashRouter,Route } from "react-router-dom";
import App from "./App"
import Store from "./components/store";

const RouteSwitch = () =>{
  return(
    <HashRouter>
      <Route path="/" element={<App/>}/>
      <Route path="/store" element={<Store/>}/>
    </HashRouter>
  );
}

export default RouteSwitch;

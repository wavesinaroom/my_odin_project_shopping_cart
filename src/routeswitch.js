import React from "react";
import { HashRouter,Routes,Route } from "react-router-dom";
import App from "./App"
import Store from "./components/store";

const RouteSwitch = () =>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;

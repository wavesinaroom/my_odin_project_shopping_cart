import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import App from "./App"
import ItemPanel from "./components/itemPanel";

afterEach(cleanup);

const details = {pic: `a pic`, title:`a title`, description:`a description`}
const addCartMock =jest.fn(); 

describe("App component", ()=>{
  it(`Renders correctly`,()=>{
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/item' element={<ItemPanel/>}/>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId(`main-title`)).toBeInTheDocument();
    expect(screen.getByTestId(`items-display`)).toBeInTheDocument();
  });
});

describe(`Item display`,()=>{
  it(`Renders twelve items`, ()=>{
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path="/item" element={<ItemPanel/>}/>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getAllByTestId('item-test')).toHaveLength(12);
  }); 
});

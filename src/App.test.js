import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import App from "./App"
import ItemPanel from "./components/itemPanel";

afterEach(cleanup);

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

it(`toggles cart panel on/off`,async()=>{
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </MemoryRouter>);

  userEvent.click(screen.getByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.getByRole(`button`, {name: `Checkout`})).toBeInTheDocument();
  });

  userEvent.click(screen.queryByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
  });
});

it.only(`Adds an item to cart`,async ()=>{
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/item" element={<ItemPanel/>}/>
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByAltText(`Reaper`));
  fireEvent.click(screen.getByRole(`button`, {name: `Add`})) 
  fireEvent.click(screen.getByRole(`button`, {name: `X`}))
  fireEvent.click(screen.getByAltText(`cart-icon`))


});



import React from "react";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
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

test.skip(`toggles cart panel on/off`,async()=>{
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

it(`Adds an item to cart`,async ()=>{
  const changeSize = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(size => [size, changeSize]);
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/item" element={<ItemPanel/>}/>
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.queryByAltText(`Reaper`));
  userEvent.click(screen.queryByRole(`button`,{name:`Add`}));

  await waitFor(()=>{
    expect(changeSize).toBeCalled();
  });
});


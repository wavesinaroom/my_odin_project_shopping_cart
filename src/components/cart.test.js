import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router";
import App from "../App";
import Cart from "./cart";
import Items from './itemsList.json'

afterEach(cleanup);

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

it(`checks out items`, ()=>{
  const removeMock = jest.fn();
  const renderBool = true;
  
  render(
    <Cart cart={Items} removeCart={removeMock} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByRole(`button`, {name: `Checkout`}));

    expect(screen.getByText(`Thanks for shopping at VST store`)).toBeInTheDocument();
    expect(screen.queryByRole(`button`, {name:`Checkout`})).not.toBeInTheDocument();
});

it(`goes back to main`, ()=>{
  const removeMock = jest.fn();
  const renderBool = true;
  
  render(
    <Cart cart={Items} removeCart={removeMock} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByRole(`button`, {name: `Back`}));

  expect(screen.queryByRole(`button`, {name: `Back`})).not.toBeInTheDocument();
  expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
});

it(`deletes an item`,()=>{
  const renderBool = true;
  const item = {name:`Reaper`};
  const removeMock = jest.fn(); 

  render(
    <Cart cart={Items} removeCart={()=>removeMock(item)} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByTestId(`Reaper`));
  expect(removeMock).toBeCalledWith(item);

});

it(`gets total price`,()=>{
  const renderBool = true;
  const item = {name:`Reaper`};
  const removeMock = jest.fn(); 
  const total = 1633;
  
  render(
    <Cart cart={Items} removeCart={()=>removeMock(item)} isRendered={renderBool} total={total}/> 
  );

  expect(screen.getByText(`1633`)).toBeInTheDocument();
});

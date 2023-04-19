import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router";
import App from "../App";
import Cart from "./cart";
import Items from './itemsList.json'

afterEach(cleanup);


render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
  </MemoryRouter>);

it(`toggles cart panel on`,async()=>{
  userEvent.click(screen.getByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.getByRole(`button`, {name: `Checkout`})).toBeInTheDocument();
  });
});

it(`toggles cart panel off`,async()=>{
  userEvent.click(screen.queryByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
  });
});


it(`Checks out items`, async()=>{
  const removeMock = jest.fn();
  const renderBool = true;
  
  render(
    <Cart cart={Items} removeCart={removeMock} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByRole(`button`, {name: `Checkout`}));

    expect(screen.getByText(`Thanks for shopping at VST store`)).toBeInTheDocument();
    expect(screen.queryByRole(`button`, {name:`Checkout`})).not.toBeInTheDocument();
});


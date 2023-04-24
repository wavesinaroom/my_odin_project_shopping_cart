import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Cart from "./cart";
import Items from './itemsList.json'

afterEach(cleanup);

const setMock = jest.fn();
const renderBool = true;

it(`checks out items`, async()=>{
  
  render(
    <Cart setCart={setMock} cart={Items} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByRole(`button`, {name: `Checkout`}));

  expect(screen.getByText(`Thanks for shopping at VST store`)).toBeInTheDocument();
  expect(screen.queryByRole(`button`, {name:`Checkout`})).not.toBeInTheDocument();
});

it.only(`goes back to main`, ()=>{
  
  render(
    <Cart setCart={setMock} cart={Items} isRendered={renderBool}/> 
  );

  fireEvent.click(screen.getByRole(`button`, {name: `Back`}));

  expect(screen.queryByRole(`button`, {name: `Back`})).not.toBeInTheDocument();
  expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
});

it(`deletes an item`,async()=>{
  const renderBool = true;

  render(
    <Cart input={Items}  isRendered={renderBool}/> 
  );

  userEvent.click(screen.getByTestId(`Reaper`));
  await waitFor(()=>{
    expect(screen.queryByTestId(`Reaper`)).toBeNull();
  }) 
});

it(`gets total price`,()=>{
  const renderBool = true;
  const total = 1633;
  
  render(
    <Cart cart={Items} isRendered={renderBool} total={total}/> 
  );
  expect(screen.getByText(`1633`)).toBeInTheDocument();
});

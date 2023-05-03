import React from "react";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Cart from "./cart";
import Items from './itemsList.json'

afterEach(cleanup);

const setMock = jest.fn();

it(`renders contents`, ()=>{
  render(<Cart setCart={setMock} cart={Items}/>);
  expect(screen.getByAltText(`cart-icon`)).toBeInTheDocument();
});

it(`checks out items`, async()=>{
  
  render(
    <Cart setCart={setMock} cart={Items}/> 
  );

  fireEvent.click(screen.getByAltText(`cart-icon`));
  fireEvent.click(screen.getByRole(`button`, {name: `Checkout`}));

  expect(screen.getByText(`Thanks for shopping at VST store`)).toBeInTheDocument();
  expect(screen.queryByRole(`button`, {name:`Checkout`})).not.toBeInTheDocument();
});

it(`goes back to main`, ()=>{
  
  render(
    <Cart setCart={setMock} cart={Items}/> 
  );

  fireEvent.click(screen.getByAltText(`cart-icon`));
  fireEvent.click(screen.getByRole(`button`, {name: `Back`}));

  expect(screen.queryByRole(`button`, {name: `Back`})).not.toBeInTheDocument();
  expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
});

it(`deletes an item`,async()=>{

  render(
    <Cart setCart={setMock} cart={Items}/> 
  );

  fireEvent.click(screen.getByAltText(`cart-icon`));
  fireEvent.click(screen.getByTestId(`Reaper`));
  expect(setMock).toBeCalled();
});

it(`gets total price`,()=>{
  
  render(
    <Cart setCart={setMock} cart={Items}/> 
  );

  fireEvent.click(screen.getByAltText(`cart-icon`));
  expect(screen.getByText(`1633`)).toBeInTheDocument();
});

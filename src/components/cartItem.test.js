import React from "react";
import { cleanup, fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import CartItem from "./cartItem";

const item = {name: `a name`, pic:`a pic`, price: `a price`};
const setMock = jest.fn();

afterEach(cleanup);

it(`renders contents`, ()=>{
  render(
    <CartItem item={item} setCart={setMock}/>
  );  

  expect(screen.getByRole(`button`, {name: `-`})).toBeInTheDocument();
  expect(screen.getByAltText(item.name)).toBeInTheDocument();
  expect(screen.getByAltText(item.name)).toBeInTheDocument();
  expect(screen.getByText(item.name)).toBeInTheDocument();
});


import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App"
import Item from "./components/item";

afterEach(cleanup);

describe("App component", ()=>{
  it(`Renders correctly`,()=>{
    render(<App/>);
  });
});

describe(`Item display`,()=>{
  it(`Renders twelve items`, ()=>{
    render(<App/>);
    expect(screen.getAllByTestId('item-test')).toHaveLength(12);
  }); 
});

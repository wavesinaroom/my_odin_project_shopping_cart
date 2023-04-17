import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App"

afterEach(cleanup);

describe("App component", ()=>{
  it(`Renders correctly`,()=>{
    render(<App/>);
    expect(screen.getByTestId('main-title')).toBeInTheDocument();
    expect(screen.getByTestId(`items-display`)).toBeInTheDocument();
  });
});

describe(`Item display`,()=>{
  it(`Renders twelve items`, ()=>{
    render(<App/>);
    expect(screen.getAllByTestId('item-test')).toHaveLength(12);
  }); 
});

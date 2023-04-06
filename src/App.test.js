import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App"

describe("App component", ()=>{
  it("renders correcly",()=>{
    render(<App/>);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  })
})

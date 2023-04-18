import React from "react";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router";
import App from "../App";
import {async} from "q";

afterEach(cleanup);

describe(`Cart button toggle`,()=>{

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
        </Routes>
      </MemoryRouter>);
  it(`toggles cart panel`,async()=>{
    userEvent.click(screen.queryByAltText(`cart-icon`));

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
});


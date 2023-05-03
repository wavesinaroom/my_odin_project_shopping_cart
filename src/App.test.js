
import React from "react";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import App from "./App"
import Store from "./components/store"

afterEach(cleanup);

it(`renders correctly`,()=>{
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByRole(`heading`,{name:`Welcome to the VST store`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Enter`})).toBeInTheDocument();
});

it(`gets user to store after button click`, async()=>{
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.getByRole(`button`, {name:`Enter`}));

  await waitFor(()=>{
    expect(screen.getByAltText(`Reaper`)).toBeInTheDocument();
  });
});

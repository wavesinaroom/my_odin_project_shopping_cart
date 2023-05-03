import React from "react";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Store from "./store";

afterEach(cleanup);

it(`renders correctly`,()=>{
  render(<Store/>);
  expect(screen.getByTestId(`main-title`)).toBeInTheDocument();
  expect(screen.getByTestId(`items-display`)).toBeInTheDocument();
  expect(screen.getByTestId(`cart-display`)).toBeInTheDocument();
});

it(`renders twelve items`, ()=>{
  render(<Store/>);
  expect(screen.getAllByTestId('item-test')).toHaveLength(12);
}); 

it(`toggles cart panel on/off`,async()=>{
  render(<Store/>);

  userEvent.click(screen.getByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.getByRole(`button`, {name: `Checkout`})).toBeInTheDocument();
  });

  userEvent.click(screen.queryByAltText(`cart-icon`));

  await waitFor(()=>{
    expect(screen.queryByRole(`button`, {name: `Checkout`})).not.toBeInTheDocument();
  });
});

it(`toggles item panel on/off`,async ()=>{
  render(<Store/>);

  userEvent.click(screen.getByAltText(`Reaper`));

  await waitFor(()=>{
    expect(screen.getByRole(`button`,{name:`Add`})).toBeInTheDocument();
  });

  userEvent.click(screen.getByAltText(`Reaper`));

  await waitFor(()=>{
    expect(screen.queryByRole(`button`, {name:`Add`})).not.toBeInTheDocument();
  });
});


it(`adds an item`,async ()=>{
  render(<Store/>);

  userEvent.click(screen.getByAltText(`Reaper`));

  await waitFor(()=>{
    expect(screen.getByRole(`button`,{name:`Add`})).toBeInTheDocument();
  });

  userEvent.click(screen.getByRole(`button`, {name:`Add`}));
  userEvent.click(screen.getByAltText(`Reaper`));

  await waitFor(()=>{
    expect(screen.queryByRole(`button`, {name:`Add`})).not.toBeInTheDocument();
  });

    userEvent.click(screen.getByAltText(`cart-icon`))
  await waitFor(()=>{
    expect(screen.getByTestId(`Reaper`)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, cleanup,screen,  waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemPanel from './itemPanel';
import Items from './itemsList.json'
import App from '../App'

afterEach(cleanup);
const details = {pic: `a pic`, title:`a title`, description:`a description`}

test(`Content renders`,()=>{

  render(
    <MemoryRouter>
      <ItemPanel info={details} cart={Items}/>;
    </MemoryRouter>);

  const image = screen.getByAltText(`${details.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${details.pic}`);
  expect(screen.getByRole(`heading`,`${details.title}`)).toBeInTheDocument();
  expect(screen.getByText(`${details.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

test(`Add button click event`,async()=>{
  render(
    <MemoryRouter>
      <ItemPanel info={details} cart={Items}/>);
    </MemoryRouter>);

  userEvent.click(screen.queryByRole(`button`, {name: `Add`}));

  await waitFor(()=>{
  expect(screen.getByText(`Item added to cart`)).toBeInTheDocument(); 
  })
  expect(screen.queryByRole(`button`, {name: `Add`})).toBeNull();
});

test(`X button returns to main`, async()=>{
  render(
    <MemoryRouter initialEntries={['/item']}>
      <Routes>
        <Route path='/item' element={<ItemPanel info={details} cart={Items}/>}/>
        <Route path='/' element={<App cart={Items}/>}/>
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.queryByText(`&times`));

  await waitFor(()=>{
    expect(screen.getByRole('heading', `VST shop`)).toBeInTheDocument();
  });
  
});

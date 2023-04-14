import React from 'react';
import { render, cleanup,screen,  waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemPanel from './itemPanel';
import App from '../App';

afterEach(cleanup);
const details = {pic: `a pic`, title:`a title`, description:`a description`}
const addCartMock =jest.fn(); 

test(`Content renders`,()=>{

  render(
    <MemoryRouter>
      <ItemPanel info={details} addCart={()=>{addCartMock(details)}}/>;
    </MemoryRouter>);

  const image = screen.getByAltText(`${details.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${details.pic}`);
  expect(screen.getByRole(`heading`,`${details.title}`)).toBeInTheDocument();
  expect(screen.getByText(`${details.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

test(`Add button click event`,()=>{
  render(
    <MemoryRouter>
      <ItemPanel info={details} addCart={()=>{addCartMock(details)}}/>);
    </MemoryRouter>);

  fireEvent.click(screen.queryByText(`Add`));
  expect(addCartMock).toHaveBeenCalledWith(details);
  expect(screen.getByText(`Item added to cart`)).toBeInTheDocument(); 
  expect(screen.queryByRole(`button`, {name: `Add`})).toBeNull();
});

test(`X button returns to main`, async()=>{
  render(
    <MemoryRouter initialEntries={['/item']}>
      <Routes>
        <Route path='/item' element={<ItemPanel info={details} addCart={()=>{addCartMock(details)}}/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.queryByText(`&times`));

  await waitFor(()=>{
    expect(screen.getByRole('heading', `VST shop`)).toBeInTheDocument();
  });
  
});

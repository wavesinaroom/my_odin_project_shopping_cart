import React from 'react';
import { render, cleanup,screen,  waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemPanel from './itemPanel';
import App from '../App'


afterEach(cleanup);
const details = {pic: `a pic`, title:`a title`, description:`a description`}
const setMock = jest.fn();

it(`renders content`,()=>{

  render(
    <MemoryRouter>
      <ItemPanel info={details} setCart={setMock}/>;
    </MemoryRouter>);

  const image = screen.getByAltText(`${details.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${details.pic}`);
  expect(screen.getByRole(`heading`,`${details.title}`)).toBeInTheDocument();
  expect(screen.getByText(`${details.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

it(`clicks an add button and notifies added item`,()=>{
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/item' element={<ItemPanel info={details} setCart={setMock}/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </MemoryRouter>);

  fireEvent.click(screen.getByAltText(`Reaper`));
  fireEvent.click(screen.getByRole(`button`, {name: `Add`}));

  expect(screen.getByText(`Item added to cart`)).toBeInTheDocument(); 
  expect(setMock).toBeCalled();
  expect(screen.queryByRole(`button`, {name: `Add`})).toBeNull();
});

it(`clicks X button to return to main`, ()=>{
  render(
    <MemoryRouter initialEntries={['/item']}>
      <Routes>
        <Route path='/item' element={<ItemPanel info={details} setCart={setMock}/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(`X`));

  expect(screen.getByText(`VST shop`)).toBeInTheDocument();
  
});

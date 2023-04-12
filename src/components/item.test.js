import React from 'react';
import { render, cleanup,screen, getByAltText, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Item from './item';
import App from '../App';

afterEach(cleanup);
const details = {pic: `a pic`, title:`a title`, description:`a description`}
const addCartMock =jest.fn(); 

test(`Content renders`,()=>{

  render(
    <MemoryRouter>
      <Item info={details} addCart={()=>{addCartMock(details)}}/>;
    </MemoryRouter>);

  const image = screen.getByAltText(`${details.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${details.pic}`);
  expect(screen.getByRole(`heading`, {name:details.title})).toBeInTheDocument();
  expect(screen.getByText(`${details.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

test(`Add button click event`,async ()=>{
  render(
    <MemoryRouter>
      <Item info={details} addCart={()=>{addCartMock(details)}}/>);
    </MemoryRouter>);

  await userEvent.click(screen.queryByText(`Add`));
  expect(addCartMock).toHaveBeenCalledWith(details);
});

test(`X button returns to main`, async()=>{
  render(
    <MemoryRouter initialEntries={['/item']}>
      <Routes>
        <Route path='/item' element={<Item info={details} addCart={()=>{addCartMock(details)}}/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.queryByText(`X`));

  await waitFor(()=>{
    expect(screen.getByRole('heading').textContent).toMatch(/VST shop/);
  });
  
});

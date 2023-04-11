import React from 'react';
import { render, cleanup,screen, getByAltText} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Item from './item';

afterEach(cleanup);
const details = {pic: `a pic`, title:`a title`, description:`a description`}
const addCartMock =jest.fn(); 

test(`Content renders`,()=>{
  render(<Item info={details} addCart={addCartMock}/>);

  const image = screen.getByAltText(`${details.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${details.pic}`);
  expect(screen.getByRole(`heading`, {name:details.title})).toBeInTheDocument();
  expect(screen.getByText(`${details.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

test(`Add button click event`,()=>{
  render(<Item info={details} addCart={addCartMock(details)}/>);

  userEvent.click(screen.getByRole(`button`), {name: `Add`});
  expect(addCartMock).toHaveBeenCalledWith(details);
});

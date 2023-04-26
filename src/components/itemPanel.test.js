import React from 'react';
import { render, cleanup,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import ItemPanel from './itemPanel';


afterEach(cleanup);
const item = {pic: `a pic`, title:`a title`, description:`a description`}
const setMock = jest.fn();

it(`renders content`,()=>{

  render(
      <ItemPanel item={item} addCart={setMock}/>
    );

  const image = screen.getByAltText(`${item.title}`);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(`src`,`${item.pic}`);
  expect(screen.getByRole(`heading`,`${item.title}`)).toBeInTheDocument();
  expect(screen.getByText(`${item.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

it(`clicks an add button and notifies added item`,()=>{
  render(<ItemPanel item={item} addCart={setMock}/>);

  fireEvent.click(screen.getByRole(`button`, {name: `Add`}));

  expect(screen.getByText(`Item added to cart`)).toBeInTheDocument(); 
  expect(setMock).toBeCalled();
  expect(screen.queryByRole(`button`, {name: `Add`})).toBeNull();
});

it(`clicks X button to return to main`, ()=>{
  render(<ItemPanel item={item} addCart={setMock}/>);
  
  fireEvent.click(screen.getByRole(`button`, {name:`X`}))
  expect(screen.queryByText(`X`)).not.toBeInTheDocument();
  
});

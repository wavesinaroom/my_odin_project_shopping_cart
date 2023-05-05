
import React from 'react';
import { render, cleanup,screen,  fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import ItemPanel from './itemPanel';


afterEach(cleanup);
const itemMock = {pic: `a pic`, title:`a title`, description:`a description`}
const setMock = jest.fn();
const clickOutMock = jest.fn();

it(`renders content`,()=>{

  render(<ItemPanel item={itemMock} setCart={setMock} isModalOpen={true} setIsModalOpen={clickOutMock} />);

  expect(screen.getByAltText(`${itemMock.title}`)).toBeInTheDocument();
  expect(screen.getByAltText(`${itemMock.title}`)).toHaveAttribute(`src`,`${itemMock.pic}`);
  expect(screen.getByRole(`heading`,`${itemMock.title}`)).toBeInTheDocument();
  expect(screen.getByText(`${itemMock.description}`)).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name: `Add`})).toBeInTheDocument();
});

it(`clicks an add button and notifies added item`,()=>{
  render(<ItemPanel item={itemMock} setCart={setMock} isModalOpen={true} setIsModalOpen={clickOutMock}/>);

  fireEvent.click(screen.getByRole(`button`, {name: `Add`}));

  expect(screen.getByText(`Item added to cart`)).toBeInTheDocument(); 
  expect(setMock).toBeCalled();
  expect(screen.queryByRole(`button`, {name: `Add`})).toBeNull();
});



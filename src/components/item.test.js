
import React from 'react';
import { render, cleanup,screen,  fireEvent, getByRole} from '@testing-library/react';
import '@testing-library/jest-dom'
import Item from './item';


afterEach(cleanup);
const itemMock = {pic: `a pic`, name:`a name`, description:`a description`, type:`VST`, price:0}
const setMock = jest.fn();
const panelMock = jest.fn();

it(`renders content`,()=>{
  render(<Item item={itemMock} setItem={setMock} openPanel={panelMock}/>);

  expect(screen.getByRole(`heading`, {name: `${itemMock.name}`})).toBeInTheDocument();
  expect(screen.getByAltText(`${itemMock.name}`)).toBeInTheDocument();
  expect(screen.getByText(`${itemMock.description}`)).toBeInTheDocument();
  expect(screen.getByText(`${itemMock.price}`)).toBeInTheDocument();
})

it(`handles store item hook`,()=>{
  render(<Item item={itemMock} setItem={setMock} openPanel={panelMock}/>);

  fireEvent.click(screen.getByAltText(`${itemMock.name}`));
  expect(setMock).toBeCalled();
});

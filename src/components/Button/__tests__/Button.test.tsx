import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../Button';


const text = "Button text"
describe('Button', () => {
  test('should render a button with the correct children', () => {
    const children = <article><p>This is a text</p></article>
    const { getByText } = render(<Button onClick={() => { }} >{children}</Button>);
    const button = getByText('This is a text');
    expect(button).toBeInTheDocument();
  });

  test('should call the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} >{text}</Button >);
    const button = getByRole('button');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  test('should render a button with the correct role', () => {
    const role = "submit"
    const { getByRole } = render(<Button onClick={() => { }} role={role} >{text}</Button>);
    const button = getByRole('submit');
    expect(button).toHaveAttribute('role', role);
  })

  test('should render a button with the default role', () => {
    const { getByRole } = render(<Button onClick={() => { }}>{text}</Button>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('role', 'button');
  })
});
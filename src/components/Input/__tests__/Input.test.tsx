import { fireEvent, render } from "@testing-library/react";
import { Input } from "../Input";

describe('Input', () => {
  test('should render an input with the correct label and id', () => {
    const textLabel = "text label"
    const inputId = "inputId"
    const { getByText } = render(<Input id={inputId} type="number" label={textLabel} onChange={() => { }} />);
    expect(getByText(textLabel)).toBeInTheDocument();
    expect(getByText(textLabel)).toHaveAttribute('for', inputId);
  })
  test('should render with correct props', () => {
    const textLabel = "text label"
    const inputId = "inputId"
    const type = 'text';
    const value = 'value';
    const disabled = true;
    const placeholder = 'placeholder';
    const required = true;
    const name = 'name';
    const { container } = render(
      <Input
        id={inputId}
        type={type}
        label={textLabel}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={() => { }}
      />
    );
    expect(container).toMatchSnapshot();
  })
  test('should call the onChange function when input changes', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<Input id="inputId" type="number" label="text label" onChange={onChange} />);
    const input = getByLabelText('text label');
    console.log(input);
    fireEvent.change(input, { target: { value: 4 } });
    expect(onChange).toHaveBeenCalled();
  })
});
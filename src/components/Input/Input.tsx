type InputValue = string | number | readonly string[] | undefined

interface InputProps {
  type: string;
  id: string;
  label: string;
  value?: InputValue;
  disabled?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { id, label } = props

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </>
  )
}
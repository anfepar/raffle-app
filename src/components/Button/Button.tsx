import { AriaRole } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  role?: AriaRole;
}

export const Button = ({ onClick, children, role = "button" }: ButtonProps) =>
  <button role={role} onClick={onClick}>
    {children}
  </button>

import { AriaRole } from "react";
import { secondaryBackgroundColor } from "../../styles/common/colors";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  role?: AriaRole;
}

export const Button = ({ onClick, children, role = "button" }: ButtonProps) =>
  <button
    className={`${secondaryBackgroundColor} p-1.5 text-2xl text-white uppercase font-bold `}
    role={role}
    onClick={onClick}
  >
    {children}
  </button>

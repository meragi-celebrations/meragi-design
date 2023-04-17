import React from "react";
import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, size = "medium" }) => {
  const buttonClassName = `btn my-button${size ? ` ${size}` : ""}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

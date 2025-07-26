import React from 'react';
import "../styles/Button.css";

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'accent';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type = 'button', variant = 'primary', onClick }) => {
  return (
    <button className={`button button-${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
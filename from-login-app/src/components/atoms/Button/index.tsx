import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
  type: 'submit' | 'button'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; 
  text: string;
  
}

const Button: FC<ButtonProps> = ({ type, onClick, text }) => {
  return (
    <>
    <div>
    <button type={type} onClick={onClick}>
      {text}
    </button>
    </div>
    </>
    
  )
}

export default Button

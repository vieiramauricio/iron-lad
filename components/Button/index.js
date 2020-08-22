import React from 'react';
import { button } from './button.module.css'

const Button = ({children, ...props}) => {
  return (
    <button className={button} {...props}>
      {children}
    </button>
  )
}

export default Button;
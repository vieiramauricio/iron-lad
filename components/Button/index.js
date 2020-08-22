import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { button } from './button.module.css'

const Button = ({children}) => {
  return (
    <button className={button}>
      {children}
    </button>
  )
}

export default Button;
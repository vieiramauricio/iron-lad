 import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { btn } from './button.module.css';

const Button = ({loading, children, handle ,...props}) => {
  return (
    <button className={btn} {...props} onClick={handle}>
      {loading ? (
        <CircularProgress size="10px" color="inherit" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
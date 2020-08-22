import React from 'react';
import { CircularProgress } from '@material-ui/core';
import ButtonStyled from './styles';

const Button = ({children, loading, handle, size,...props}) => {
  return (
    <ButtonStyled {...props} onClick={handle}>
      {loading ? (
        <CircularProgress size="10px" color="inherit" />
      ) : (
        children
      )}
    </ButtonStyled>
  );
};

export default Button;
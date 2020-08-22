import React from 'react';
import { messagecall } from './messages.module.css';

const CallToPage = ({children}) => {
  return (
    <span className={messagecall}>
      {children}
    </span>
  )
}

export { CallToPage};
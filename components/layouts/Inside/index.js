import React from 'react';

import { container } from './inside.module.css';

const Inside = ({ children }) => {

  return (
    <div className={container}>{children}</div>
  );
};

export default Inside;

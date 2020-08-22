import React from 'react';
import { title, subtitle } from './title.module.css';

const Title = ({children}) => {
  return <h1 className={title}>{children}</h1>;
}

const Subtitle = ({children}) => {
  return <h2 className={subtitle}>{children}</h2>;
}

export { Title, Subtitle };
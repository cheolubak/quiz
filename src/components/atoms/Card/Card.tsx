import React from 'react';
import { CardProps } from './CardProps';
import { CardStyled } from './CardStyled';

function Card({ children, ...props }: CardProps) {
  return <CardStyled {...props}>{children}</CardStyled>;
}

export default Card;

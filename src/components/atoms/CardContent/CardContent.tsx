import React from 'react';
import { CardContentProps } from './CardContentProps';
import { CardContentStyled } from './CardContentStyled';

function CardContent({ children, ...props }: CardContentProps) {
  return <CardContentStyled {...props}>{children}</CardContentStyled>;
}

export default CardContent;

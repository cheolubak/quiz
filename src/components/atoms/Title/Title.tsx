import React from 'react';
import { TitleProps } from './TitleProps';
import { TitleStyled } from './TitleStyled';

function Title({ children, ...props }: TitleProps) {
  return <TitleStyled {...props}>{children}</TitleStyled>;
}

export default Title;

import React from 'react';
import { QuizTitleProps } from './QuizTitleProps';
import { QuizTitleStyled } from './QuizTitleStyled';

function QuizTitle({ children, ...props }: QuizTitleProps) {
  return <QuizTitleStyled {...props}>{children}</QuizTitleStyled>;
}

export default QuizTitle;

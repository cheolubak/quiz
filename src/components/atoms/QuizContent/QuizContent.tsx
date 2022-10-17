import React from 'react';
import { QuizContentProps } from './QuizContentProps';
import { QuizContentStyled } from './QuizContentStyled';

function QuizContent({ children, ...props }: QuizContentProps) {
  return <QuizContentStyled {...props}>{children}</QuizContentStyled>;
}
export default QuizContent;

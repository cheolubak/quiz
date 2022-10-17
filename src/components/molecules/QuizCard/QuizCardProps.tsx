import { HTMLAttributes } from 'react';
import { Quiz } from '../../../models/Quiz';

export interface QuizCardProps extends Quiz, HTMLAttributes<HTMLElement> {
  isResult?: boolean;
  selectedAnswer?: string;
}

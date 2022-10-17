import { STATUS } from '../types/Status';

export interface QuizResult {
  status: STATUS;
  selectedAnswer: string | null;
}

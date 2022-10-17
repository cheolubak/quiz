import { atom } from 'recoil';
import { Quiz } from '../models/Quiz';
import { QuizResult } from '../models/QuizResult';

export const quizListState = atom<Quiz[]>({
  key: 'quizListState',
  default: [],
});

export const currentQuizIndexState = atom<number>({
  key: 'currentQuizIndexState',
  default: 0,
});

export const quizResultState = atom<QuizResult[]>({
  key: 'quizResultState',
  default: [],
});

import { atom } from 'recoil';
import { Quiz } from '../models/Quiz';

export const quizListState = atom<Quiz[]>({
  key: 'quizListState',
  default: [],
});

export const currentQuizIndexState = atom<number>({
  key: 'currentQuizIndexState',
  default: 0,
});
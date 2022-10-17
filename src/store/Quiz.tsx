import { atom, selector } from 'recoil';
import { Quiz } from '../models/Quiz';
import { QuizResult } from '../models/QuizResult';

const quizListKey = 'quizList';
const quizIdxKey = 'quizIdxKey';
const quizResultKey = 'quizResult';
const quizTimeKey = 'quizTime';

export const quizListState = atom<Quiz[]>({
  key: 'quizListState',
  default: !!localStorage.getItem(quizListKey)
    ? JSON.parse(localStorage.getItem(quizListKey)!!)
    : [],
  effects: [
    ({ onSet }) => {
      onSet((quizList) => {
        localStorage.setItem(quizListKey, JSON.stringify(quizList));
      });
    },
  ],
});

export const currentQuizIndexState = atom<number>({
  key: 'currentQuizIndexState',
  default: !!localStorage.getItem(quizIdxKey)
    ? JSON.parse(localStorage.getItem(quizIdxKey)!!)
    : 0,
  effects: [
    ({ onSet }) => {
      onSet((quizIdx) => {
        localStorage.setItem(quizIdxKey, JSON.stringify(quizIdx));
      });
    },
  ],
});

export const quizResultState = atom<QuizResult[]>({
  key: 'quizResultState',
  default: !!localStorage.getItem(quizResultKey)
    ? JSON.parse(localStorage.getItem(quizResultKey)!!)
    : [],
  effects: [
    ({ onSet }) => {
      onSet((quizResultList) => {
        localStorage.setItem(quizResultKey, JSON.stringify(quizResultList));
      });
    },
  ],
});

export const correctQuizCountState = selector<number>({
  key: 'correctQuizCountState',
  get({ get }) {
    const quizResult = get(quizResultState);
    return quizResult.filter((result) => result.status === 'CORRECT').length;
  },
});

export const wrongQuizCountState = selector<number>({
  key: 'wrongQuizCountState',
  get({ get }) {
    const quizResult = get(quizResultState);
    return quizResult.filter((result) => result.status === 'WRONG').length;
  },
});

export const quizTimeState = atom<number>({
  key: 'quizTimeState',
  default: !!localStorage.getItem(quizTimeKey)
    ? JSON.parse(localStorage.getItem(quizTimeKey)!!)
    : 0,
  effects: [
    ({ onSet }) => {
      onSet((quizTime) => {
        localStorage.setItem(quizTimeKey, JSON.stringify(quizTime));
      });
    },
  ],
});

interface Result {
  index: number;
  status: QuizResult['status'];
  selectedAnswer: string;
}

export const wrongQuizState = selector<Result[]>({
  key: 'wrongQuizState',
  get({ get }) {
    const quizResult = get(quizResultState);

    return quizResult
      .map((result, idx) => ({ ...result, index: idx }))
      .filter((result) => result.status === 'WRONG') as Result[];
  },
});

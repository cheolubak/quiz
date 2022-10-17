import { atom } from 'recoil';
import { STATUS } from '../types/Status';

export const quizSubmitState = atom<STATUS>({
  key: 'quizSubmitState',
  default: null,
});

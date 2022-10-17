import { useRecoilState } from 'recoil';
import { quizSubmitState } from '../store/QuizSubmit';

export function useQuizSubmit() {
  const [, setQuizSubmit] = useRecoilState(quizSubmitState);

  const correctAnswer = () => {
    setQuizSubmit('CORRECT');
  };

  const wrongAnswer = () => {
    setQuizSubmit('WRONG');
  };

  const clearAnswer = () => {
    setQuizSubmit(null);
  };

  return { correctAnswer, wrongAnswer, clearAnswer };
}

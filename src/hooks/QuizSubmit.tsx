import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentQuizIndexState,
  quizListState,
  quizResultState,
} from '../store/Quiz';
import { quizSubmitState } from '../store/QuizSubmit';

export function useQuizSubmit() {
  const quizList = useRecoilValue(quizListState);
  const [, setQuizSubmit] = useRecoilState(quizSubmitState);
  const [currentQuizIndex, setCurrentQuizIndex] = useRecoilState(
    currentQuizIndexState
  );
  const [, setQuizResult] = useRecoilState(quizResultState);

  const correctAnswer = (answer: string) => {
    setQuizSubmit('CORRECT');
    setQuizResult((prev) => [
      ...prev,
      { status: 'CORRECT', selectedAnswer: answer },
    ]);
  };

  const wrongAnswer = (answer: string) => {
    setQuizSubmit('WRONG');
    setQuizResult((prev) => [
      ...prev,
      { status: 'WRONG', selectedAnswer: answer },
    ]);
  };

  const clearAnswer = () => {
    setQuizSubmit(null);
  };

  const nextQuiz = () => {
    clearAnswer();
    setCurrentQuizIndex((prev) => prev + 1);
  };

  const submitAnswer = (answer: string) => {
    if (quizList[currentQuizIndex].correct_answer === answer) {
      correctAnswer(answer);
    } else {
      wrongAnswer(answer);
    }
  };

  const prevQuiz = () => {
    setCurrentQuizIndex((prev) => prev - 1);
  };

  return { submitAnswer, nextQuiz, prevQuiz };
}

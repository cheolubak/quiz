import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentQuizIndexState,
  quizListState,
  quizResultState,
  quizTimeState,
} from '../store/Quiz';
import { quizSubmitState } from '../store/QuizSubmit';

export function useQuiz() {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useRecoilState(quizListState);
  const [, setQuizSubmit] = useRecoilState(quizSubmitState);
  const [currentQuizIndex, setCurrentQuizIndex] = useRecoilState(
    currentQuizIndexState
  );
  const [, setQuizResult] = useRecoilState(quizResultState);
  const [, setQuizTime] = useRecoilState(quizTimeState);

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
    if (currentQuizIndex < quizList.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      goResult();
    }
  };

  const goResult = () => {
    navigate('/result');
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

  const againQuiz = () => {
    setQuizResult([]);
    setCurrentQuizIndex(0);
    setQuizTime(0);
  };

  const resetQuiz = () => {
    setQuizList([]);
    setCurrentQuizIndex(0);
    setQuizTime(0);
    setQuizResult([]);
  };

  return { submitAnswer, nextQuiz, prevQuiz, againQuiz, resetQuiz };
}

import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import {
  quizListState,
  quizResultState,
  quizTimeState,
} from '../../../store/Quiz';
import QuizTemplate from '../../templates/Quiz';
import QuizData from '../../../data/Quiz.json';
import { shuffleArray } from '../../../util/Shuffle';
import { Quiz } from '../../../models/Quiz';
import QuizSubmitAnimation from '../../molecules/QuizSubmitAnimation';

function QuizPage() {
  const [, setQuizList] = useRecoilState(quizListState);
  const [quizResult, setQuizResult] = useRecoilState(quizResultState);
  const [, setQuizTime] = useRecoilState(quizTimeState);
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    fetchQuizList();
    intervalRef.current = setInterval(() => {
      setQuizTime((prev) => prev + 0.1);
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    console.log(quizResult);
  }, [quizResult]);

  const fetchQuizList = () => {
    setQuizList((prev) =>
      !!prev && prev.length > 0
        ? prev
        : shuffleArray<Quiz>(QuizData.results)
            .slice(0, 10)
            .map((quiz) => ({
              ...quiz,
              choices: [...quiz.incorrect_answers, quiz.correct_answer],
            }))
    );
  };
  return (
    <>
      <QuizTemplate />
      <QuizSubmitAnimation />
    </>
  );
}

export default QuizPage;

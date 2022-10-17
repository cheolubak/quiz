import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import QuizData from '../../../data/Quiz.json';
import { Quiz } from '../../../models/Quiz';
import {
  quizListState, quizTimeState
} from '../../../store/Quiz';
import { shuffleArray } from '../../../util/Shuffle';
import QuizSubmitAnimation from '../../molecules/QuizSubmitAnimation';
import QuizTemplate from '../../templates/Quiz';

function QuizPage() {
  const [, setQuizList] = useRecoilState(quizListState);
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

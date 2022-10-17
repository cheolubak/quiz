import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { quizListState } from '../../../store/Quiz';
import QuizTemplate from '../../templates/Quiz';
import QuizData from '../../../data/Quiz.json';
import { shuffleArray } from '../../../util/Shuffle';
import { Quiz } from '../../../models/Quiz';
import QuizSubmitAnimation from '../../molecules/QuizSubmitAnimation';

function QuizPage() {
  const [, setQuizList] = useRecoilState(quizListState);

  useEffect(() => {
    fetchQuizList();
  }, []);

  const fetchQuizList = () => {
    setQuizList(
      shuffleArray<Quiz>(QuizData.results)
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

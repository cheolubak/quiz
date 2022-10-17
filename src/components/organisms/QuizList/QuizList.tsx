import { css } from '@emotion/css';
import { useRecoilValue } from 'recoil';
import { currentQuizIndexState, quizListState } from '../../../store/Quiz';
import Progress from '../../atoms/Progress';
import Title from '../../atoms/Title';
import QuizCard from '../../molecules/QuizCard';
import { QuizListStyled } from './QuizListStyled';

function QuizList() {
  const quizList = useRecoilValue(quizListState);
  const currentQuizIndex = useRecoilValue(currentQuizIndexState);

  return (
    <QuizListStyled>
      <Progress
        current={currentQuizIndex + 1}
        total={quizList.length}
      />
      {quizList.length > 0 && <QuizCard {...quizList[currentQuizIndex]} />}
    </QuizListStyled>
  );
}
export default QuizList;

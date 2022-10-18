import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQuiz } from '../../../hooks/Quiz';
import { quizTimeState } from '../../../store/Quiz';
import Button from '../../atoms/Button';
import SubTitle from '../../atoms/SubTitle';
import Title from '../../atoms/Title';
import ResultCart from '../../organisms/ResultChart';
import Reviews from '../../organisms/Reviews';
import { ResultTemplateStyled } from './ResultTemplateStyled';

function ResultTemplate() {
  const { againQuiz } = useQuiz();
  const quizTime = useRecoilValue(quizTimeState);

  return (
    <ResultTemplateStyled>
      <Title>퀴즈 결과</Title>
      <SubTitle>Time: {quizTime.toFixed(1)}s</SubTitle>
      <ResultCart />
      <Link to='/quiz'>
        <Button
          size='large'
          onClick={againQuiz}
        >
          다시 풀어보기
        </Button>
      </Link>
      <Reviews />
    </ResultTemplateStyled>
  );
}

export default ResultTemplate;

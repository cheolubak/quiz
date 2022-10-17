import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useQuizSubmit } from '../../../hooks/QuizSubmit';
import { currentQuizIndexState, quizResultState } from '../../../store/Quiz';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import CardContent from '../../atoms/CardContent';
import CardFooter from '../../atoms/CardFooter';
import CardHeader from '../../atoms/CardHeader';
import QuizTitle from '../../atoms/QuizTitle';
import RadioButton from '../../atoms/RadioButton';
import RadioGroup from '../../atoms/RadioGroup';
import { QuizCardProps } from './QuizCardProps';

function QuizCard({
  question,
  category,
  difficulty,
  correct_answer,
  incorrect_answers,
  choices,
  ...props
}: QuizCardProps) {
  const [selectdChoice, setSelectedChoice] = useState<any>(null);
  const currentQuizIndex = useRecoilValue(currentQuizIndexState);
  const quizResult = useRecoilValue(quizResultState);

  const { submitAnswer, prevQuiz, nextQuiz } = useQuizSubmit();

  const clickSubmitAnswer = () => {
    if (!!quizResult[currentQuizIndex]?.status) {
      nextQuiz();
    } else {
      submitAnswer(selectdChoice);
    }
  };

  useEffect(() => {
    console.log(quizResult[currentQuizIndex]);
  });

  return (
    <Card {...props}>
      <CardHeader>
        <QuizTitle dangerouslySetInnerHTML={{ __html: question }} />
      </CardHeader>
      <CardContent>
        <RadioGroup
          onChange={(value) => setSelectedChoice(value)}
          disabled={!!quizResult[currentQuizIndex]?.status}
          value={quizResult[currentQuizIndex]?.selectedAnswer}
        >
          {choices.map((choice) => (
            <RadioButton
              name='choice'
              value={choice}
            >
              {choice}
            </RadioButton>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        {currentQuizIndex > 0 && (
          <Button
            className={css`
              width: 150px;
            `}
            onClick={prevQuiz}
          >
            이전
          </Button>
        )}
        <Button
          className={css`
            width: 150px;
          `}
          disabled={!selectdChoice && !quizResult[currentQuizIndex]?.status}
          onClick={clickSubmitAnswer}
        >
          {!!quizResult[currentQuizIndex]?.status ? '다음' : '제출'}
        </Button>
      </CardFooter>
    </Card>
  );
}
export default QuizCard;

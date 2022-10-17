import { css } from '@emotion/css';
import React, { useEffect, useReducer, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentQuizIndexState, quizListState } from '../../../store/Quiz';
import { STATUS } from '../../../types/Status';
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
  const quizList = useRecoilValue(quizListState);
  const [selectdChoice, setSelectedChoice] = useState<any>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useRecoilState(
    currentQuizIndexState
  );

  useEffect(() => {
    console.log(selectdChoice);
  }, [selectdChoice]);

  const submitAnswer = () => {
    if (quizList[currentQuizIndex].correct_answer === selectdChoice) {
    } else {
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex < quizList.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      goResult();
    }
  };

  const goResult = () => {};

  return (
    <Card {...props}>
      <CardHeader>
        <QuizTitle dangerouslySetInnerHTML={{ __html: question }} />
      </CardHeader>
      <CardContent>
        <RadioGroup onChange={(value) => setSelectedChoice(value)}>
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
          >
            이전
          </Button>
        )}
        <Button
          className={css`
            width: 150px;
          `}
          disabled={!selectdChoice}
        >
          제출
        </Button>
      </CardFooter>
    </Card>
  );
}
export default QuizCard;

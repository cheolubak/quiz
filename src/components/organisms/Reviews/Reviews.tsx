import { css } from '@emotion/css';
import { useEffect } from 'react';
import { constSelector, useRecoilValue } from 'recoil';
import { quizListState, wrongQuizState } from '../../../store/Quiz';
import SubTitle from '../../atoms/SubTitle';
import QuizCard from '../../molecules/QuizCard';
import {
  ReviewsItemsStyled,
  ReviewsItemStyled,
  ReviewsStyled,
} from './ReviewsStyled';

export default function Reviews() {
  const quizList = useRecoilValue(quizListState);
  const wrongQuizResult = useRecoilValue(wrongQuizState);

  return (
    <ReviewsStyled>
      <SubTitle
        className={css`
          text-align: center;
        `}
      >
        오답노트
      </SubTitle>
      <ReviewsItemsStyled>
        {wrongQuizResult.map((result, idx) => (
          <ReviewsItemStyled key={idx}>
            <QuizCard
              {...quizList[result.index]}
              selectedAnswer={result.selectedAnswer!!}
              isResult
            />
          </ReviewsItemStyled>
        ))}
      </ReviewsItemsStyled>
    </ReviewsStyled>
  );
}

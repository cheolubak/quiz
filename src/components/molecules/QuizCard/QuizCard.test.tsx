import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { Quiz } from '../../../models/Quiz';
import { currentQuizIndexState } from '../../../store/Quiz';
import RadioButton from '../../atoms/RadioButton';
import { RadioButtonStyled } from '../../atoms/RadioButton/RadioButtonStyled';
import RadioGroup from '../../atoms/RadioGroup';
import QuizCard from './QuizCard';

describe('QuizCard 렌더 1', () => {
  beforeEach(() => {
    const quiz: Quiz = {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?',
      correct_answer: 'Bulldog',
      incorrect_answers: ['Yorkshire Terrier', 'Boxer', 'Pug'],
      choices: ['Yorkshire Terrier', 'Boxer', 'Pug', 'Bulldog'],
    };

    render(
      <BrowserRouter>
        <QuizCard {...quiz} />
      </BrowserRouter>,
      { wrapper: RecoilRoot }
    );
  });

  test('QuizCard Question 렌더', () => {
    expect(
      screen.queryByText(
        /What type of dog is 'Handsome Dan', the mascot of Yale University\?/i
      )
    ).toBeTruthy();
  });

  test('QuizCard Choices 렌더', async () => {
    expect(screen.queryByText(/Yorkshire Terrier/i)).toBeTruthy();
    expect(screen.queryByText(/Boxer/i)).toBeTruthy();
    expect(screen.queryByText(/Pug/i)).toBeTruthy();
    expect(screen.queryByText(/Bulldog/i)).toBeTruthy();
    expect(screen.getAllByRole('listitem').length).toBe(4);
  });

  test('QuizCard 다음 버튼 비활성화', () => {
    expect(screen.queryByText('제출')).toBeDisabled();
  });

  test('QuizCard 보기 선택 후 다음 버튼 활성화', async () => {
    await userEvent.click(screen.getAllByRole('listitem')[0]);
    expect(screen.queryByText('제출')).toBeEnabled();
  });
});

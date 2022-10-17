import React from 'react';
import { useRecoilValue } from 'recoil';
import { quizSubmitState } from '../../../store/QuizSubmit';
import CorrectAnimation from '../CorrectAnimation';
import WrongAnimation from '../WrongAnimation';

function QuizSubmitAnimation() {
  const quizSubmit = useRecoilValue(quizSubmitState);
  return (
    <>
      {quizSubmit === 'CORRECT' && <CorrectAnimation onComplete={() => {}} />}
      {quizSubmit === 'WRONG' && <WrongAnimation onComplete={() => {}} />}
    </>
  );
}

export default QuizSubmitAnimation;

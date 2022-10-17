import React from 'react';
import { useRecoilValue } from 'recoil';
import { useQuizSubmit } from '../../../hooks/QuizSubmit';
import { quizSubmitState } from '../../../store/QuizSubmit';
import Overlay from '../../atoms/Overlay';
import CorrectAnimation from '../CorrectAnimation';
import WrongAnimation from '../WrongAnimation';

function QuizSubmitAnimation() {
  const quizSubmit = useRecoilValue(quizSubmitState);
  const { nextQuiz } = useQuizSubmit();
  return (
    <>
      {!!quizSubmit && <Overlay />}
      {quizSubmit === 'CORRECT' && <CorrectAnimation onComplete={nextQuiz} />}
      {quizSubmit === 'WRONG' && <WrongAnimation onComplete={nextQuiz} />}
    </>
  );
}

export default QuizSubmitAnimation;

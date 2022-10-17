import React from 'react';
import { useRecoilValue } from 'recoil';
import { useQuiz } from '../../../hooks/Quiz';
import { quizSubmitState } from '../../../store/QuizSubmit';
import Overlay from '../../atoms/Overlay';
import CorrectAnimation from '../CorrectAnimation';
import WrongAnimation from '../WrongAnimation';

function QuizSubmitAnimation() {
  const quizSubmit = useRecoilValue(quizSubmitState);
  const { nextQuiz } = useQuiz();
  return (
    <>
      {!!quizSubmit && <Overlay />}
      {quizSubmit === 'CORRECT' && <CorrectAnimation onComplete={nextQuiz} />}
      {quizSubmit === 'WRONG' && <WrongAnimation onComplete={nextQuiz} />}
    </>
  );
}

export default QuizSubmitAnimation;

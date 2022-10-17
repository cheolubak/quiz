import React, { useEffect } from 'react';
import { useQuiz } from '../../../hooks/Quiz';
import HomeTemplate from '../../templates/Home';

function HomePage() {
  const { resetQuiz } = useQuiz();
  
  useEffect(() => {
    resetQuiz();
  }, []);

  return <HomeTemplate />;
}

export default HomePage;

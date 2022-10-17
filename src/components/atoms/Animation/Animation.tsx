import Lottie from 'lottie-web/build/player/lottie_light';
import React, { useEffect, useRef } from 'react';
import { AnimationProps } from './AnimationProps';
import { AnimationStyled } from './AnimationStyled';

function Animation({ onComplete, data, ...props }: AnimationProps) {
  const animationRef = useRef<HTMLDivElement>(null);
  const loadAnimationRef = useRef(false);

  useEffect(() => {
    if (!!animationRef.current && !loadAnimationRef.current) {
      const lottie = Lottie.loadAnimation({
        container: animationRef.current,
        loop: false,
        autoplay: true,
        animationData: data,
      });
      lottie.setSpeed(2);
      lottie.addEventListener('complete', onComplete);
      loadAnimationRef.current = true;
    }
  }, []);

  return <AnimationStyled ref={animationRef} />;
}

export default Animation;

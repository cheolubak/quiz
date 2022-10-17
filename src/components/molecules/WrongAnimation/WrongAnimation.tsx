import { memo } from 'react';
import { WrongAnimationProps } from './WrongAnimationProps';
import Animation from '../../atoms/Animation';

function WrongAnimation({ onComplete, ...props }: WrongAnimationProps) {
  return (
    <Animation
      onComplete={onComplete}
      data={require('./wrong.json')}
    />
  );
}

export default memo(WrongAnimation);

import { memo } from 'react';
import Animation from '../../atoms/Animation';
import { CorrectAnimationProps } from './CorrectAnimationProps';

function CorrectAnimation({ onComplete, ...props }: CorrectAnimationProps) {
  return (
    <Animation
      onComplete={onComplete}
      data={require('./correct.json')}
    />
  );
}

export default memo(CorrectAnimation);

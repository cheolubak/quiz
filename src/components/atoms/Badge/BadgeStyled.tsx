import styled from '@emotion/styled';
import { BadgeProps } from './BadgeProps';

export const BadgeStyled = styled.span<{
  difficulty: BadgeProps['difficulty'];
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 8px;
  color: #fff;
  background-color: ${({ difficulty }) =>
    (difficulty === 'easy' && 'var(--COLOR-EASY)') ||
    (difficulty === 'medium' && 'var(--COLOR-MEDIUM)') ||
    (difficulty === 'hard' && 'var(--COLOR-HARD)') ||
    'var(--COLOR-PRIMARY)'};
`;

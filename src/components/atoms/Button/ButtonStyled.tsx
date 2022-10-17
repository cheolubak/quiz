import styled from '@emotion/styled';
import { ButtonProps } from './ButtonProps';

export const ButtonStyled = styled.button<{
  theme: ButtonProps['theme'];
  size: ButtonProps['size'];
}>`
  all: unset;
  height: ${({ size }) =>
    (size === 'large' && '48px') || (size === 'middle' && '40px') || '36px'};
  padding: ${({ size }) => (size === 'large' && '0 24px') || '0 16px'};
  background-color: ${({ theme }) =>
    (theme === 'warning' && 'var(--COLOR-WARNING)') || 'var(--COLOR-PRIMARY)'};
  box-sizing: border-box;
  color: #fff;
  border-radius: 8px;
  font-size: ${({ size }) => (size === 'large' && '1.2rem') || '1rem'};
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      (theme === 'warning' && 'var(--COLOR-WARNING-HOVER)') ||
      'var(--COLOR-PRIMARY-HOVER)'};
  }

  &:active {
    background-color: ${({ theme }) =>
      (theme === 'warning' && 'var(--COLOR-WARNING-ACTIVE)') ||
      'var(--COLOR-PRIMARY-ACTIVE)'};
  }

  &:disabled {
    cursor: not-allowed;
    color: #aaa;
    background-color: #eee;
  }
`;

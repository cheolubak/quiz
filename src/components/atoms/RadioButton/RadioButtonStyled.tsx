import styled from '@emotion/styled/macro';

export const RadioButtonSelectorStyled = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border: 2px solid #ccc;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.1s;

  &:hover {
    border-color: var(--COLOR-PRIMARY);
  }

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    transition: background-color 0.1s;
  }
`;

export const RadioButtonStyled = styled.li<{
  selected: boolean;
  disabled: boolean;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
  cursor: ${({ disabled }) => (disabled && 'not-allowed') || 'pointer'};

  &:hover {
    & ${RadioButtonSelectorStyled} {
      border-color: ${({ disabled }) => (!!disabled && 'ccc') || '#aaa'};
      background-color: ${({ disabled }) =>
        (!!disabled && 'transparent') || '#eee'};
    }
  }

  & ${RadioButtonSelectorStyled} {
    border-color: ${({ selected, disabled }) =>
      (selected && !disabled && 'var(--COLOR-PRIMARY)') || '#ccc'};

    &::after {
      background-color: ${({ selected, disabled }) =>
        (selected && !disabled && 'var(--COLOR-PRIMARY)') ||
        (selected && !!disabled && '#ccc') ||
        'transparent'};
    }
  }
`;

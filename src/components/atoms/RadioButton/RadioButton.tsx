import React from 'react';
import { RadioButtonProps } from './RadioButtonProps';
import {
  RadioButtonSelectorStyled,
  RadioButtonStyled,
} from './RadioButtonStyled';

function RadioButton({
  seleced = false,
  children,
  disabled = false,
  ...props
}: RadioButtonProps) {
  return (
    <RadioButtonStyled
      selected={seleced}
      disabled={disabled}
      {...props}
    >
      <RadioButtonSelectorStyled />
      {children}
    </RadioButtonStyled>
  );
}

export default RadioButton;

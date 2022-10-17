import React from 'react';
import { RadioButtonProps } from './RadioButtonProps';
import {
  RadioButtonSelectorStyled,
  RadioButtonStyled,
} from './RadioButtonStyled';

function RadioButton({
  seleced = false,
  children,
  ...props
}: RadioButtonProps) {
  return (
    <RadioButtonStyled
      selected={seleced}
      {...props}
    >
      <RadioButtonSelectorStyled />
      {children}
    </RadioButtonStyled>
  );
}

export default RadioButton;

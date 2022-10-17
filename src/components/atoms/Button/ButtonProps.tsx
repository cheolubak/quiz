import { ButtonHTMLAttributes } from 'react';
import { SIZE, THEME } from '../../subatomic/Theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: THEME;
  size?: SIZE;
}

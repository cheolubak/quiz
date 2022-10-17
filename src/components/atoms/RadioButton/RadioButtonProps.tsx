import { HTMLAttributes } from 'react';

export interface RadioButtonProps extends HTMLAttributes<HTMLLIElement> {
  seleced?: boolean;
  name: string;
  value: any;
  disabled?: boolean;
}

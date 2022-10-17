import { HTMLAttributes } from 'react';

export interface RadioGroupProps extends HTMLAttributes<HTMLElement> {
  onChange?: (value: any) => void;
}

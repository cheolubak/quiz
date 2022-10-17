import React, {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import RadioButton from '../RadioButton';
import { RadioButtonProps } from '../RadioButton/RadioButtonProps';
import { RadioGroupProps } from './RadioGroupProps';
import { RadioGroupStyled } from './RadioGroupStyled';

function RadioGroup({
  onChange,
  children,
  disabled = false,
  value,
  ...props
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<any>();

  const selectValue = (value: any) => {
    setSelectedValue(value);
    if (!!onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <RadioGroupStyled>
      {Children.map(children, (child, idx) => {
        const item = child as ReactElement<PropsWithChildren<RadioButtonProps>>;
        if (item.type === RadioButton) {
          return cloneElement(item, {
            ...item.props,
            seleced: selectedValue === item.props.value,
            disabled: disabled || item.props.disabled,
            onClick: () =>
              !disabled &&
              !item.props.disabled &&
              selectValue(item.props.value),
          });
        } else {
          return child;
        }
      })}
    </RadioGroupStyled>
  );
}

export default RadioGroup;

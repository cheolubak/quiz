import { ButtonProps } from './ButtonProps';
import { ButtonStyled } from './ButtonStyled';

function Button({
  theme = 'primary',
  size = 'large',
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled
      theme={theme}
      size={size}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;

import { CardFooterProps } from './CardFooterProps';
import { CardFooterStyled } from './CardFooterStyled';

function CardFooter({ children, ...props }: CardFooterProps) {
  return <CardFooterStyled>{children}</CardFooterStyled>;
}

export default CardFooter;

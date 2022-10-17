import { CardHeaderProps } from './CardHeaderProps';
import { CardHeaderStyled } from './CardHeaderStyled';

function CardHeader({ children, ...props }: CardHeaderProps) {
  return <CardHeaderStyled {...props}>{children}</CardHeaderStyled>;
}

export default CardHeader;

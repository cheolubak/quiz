import { SubTitleProps } from './SubTitleProps';
import { SubTitleStyled } from './SubTitleStyled';

function SubTitle({ children, ...props }: SubTitleProps) {
  return <SubTitleStyled {...props}>{children}</SubTitleStyled>;
}

export default SubTitle;

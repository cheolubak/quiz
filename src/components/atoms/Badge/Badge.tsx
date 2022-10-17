import { BadgeProps } from './BadgeProps';
import { BadgeStyled } from './BadgeStyled';

function Badge({ difficulty, ...props }: BadgeProps) {
  return <BadgeStyled difficulty={difficulty}>{difficulty}</BadgeStyled>;
}
export default Badge;

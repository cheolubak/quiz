import styled from '@emotion/styled';

export const ProgressStyled = styled.div`
  height: 30px;
  border-radius: 4px;
  background-color: #ddd;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const ProgressAvtiveStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--COLOR-PRIMARY);
  transition: width 0.3s;
`;

export const ProgressIndexStyled = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: 500;
  color: #aaa;
`;

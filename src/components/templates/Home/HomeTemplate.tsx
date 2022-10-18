import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import { HomeTemplateStyled } from './HomeTemplateStyled';

function HomeTemplate() {
  return (
    <HomeTemplateStyled>
      <Title>환영합니다!</Title>
      <Description>퀴즈 풀기를 누르면 퀴즈가 시작됩니다.</Description>
      <Link to='/quiz'>
        <Button>퀴즈 풀기</Button>
      </Link>
    </HomeTemplateStyled>
  );
}

export default HomeTemplate;

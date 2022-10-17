import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import { HomeTemplateStyled } from './HomeTemplateStyled';

function HomeTemplate() {
  return (
    <HomeTemplateStyled>
      <Title>Welcome to Quiz!</Title>
      <Description>Please click the START button to start</Description>
      <Link to='/quiz'>
        <Button>START</Button>
      </Link>
    </HomeTemplateStyled>
  );
}

export default HomeTemplate;

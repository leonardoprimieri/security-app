import React from 'react';

import { isLogged } from '../../helpers/AuthHandler';

import { Container, Content } from './styles';
import SideBar from '../../components/SideBar';
import ForbiddenAccess from '../../components/ForbiddenAccess';
import FormArea from '../../components/FormArea';

const NewCrime = () => {
  return (
    <Container>
      <SideBar />
      <Content>{isLogged() ? <FormArea /> : <ForbiddenAccess />}</Content>
    </Container>
  );
};

export default NewCrime;

import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/warning.svg';

import { Container, Content, FormArea, MainArea } from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <FormArea>
          <h1>Security City</h1>
          <p>Reporte crimes da sua cidade.</p>
          <Link to="/crimes">
            <FiLogIn strokeWidth={3} size={24} />
            Ver crimes já reportados
          </Link>
        </FormArea>
        <MainArea>
          <img src={banner} alt="banner" />
        </MainArea>
      </Content>
    </Container>
  );
};

export default Home;

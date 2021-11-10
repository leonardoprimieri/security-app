import React from 'react';
import { FiAlertTriangle, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import forbidden from '../../assets/images/forbidden.svg';

import { Container, Buttons } from './styles';

const ForbiddenAccess = () => {
  return (
    <Container>
      <img src={forbidden} alt="access forbidden" />
      <h1>Ops, você precisa estar logado para reportar um crime!</h1>
      <Buttons>
        <Link to="/login">
          <button className="btn-login">
            <FiLogIn size={24} /> Fazer Login
          </button>
        </Link>
        <Link to="/crimes">
          <button>
            <FiAlertTriangle size={24} /> Ver crimes reportados
          </button>
        </Link>
      </Buttons>
    </Container>
  );
};

export default ForbiddenAccess;

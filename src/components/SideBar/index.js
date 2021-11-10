import React from 'react';

import { Container } from './styles';

import banner from '../../assets/images/warning.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';

import { isLogged, logOut } from '../../helpers/AuthHandler';

const SideBar = () => {
  return (
    <Container>
      <Link to="/">
        <img src={banner} alt="banner" />
      </Link>
      {isLogged() ? (
        <button>
          <FiPower size={24} color="#fff" onClick={() => logOut()} />
        </button>
      ) : (
        <NavLink to="/login" activeClassName="activeLink">
          <button>
            <FiLogIn size={24} color="#fff" />
          </button>
        </NavLink>
      )}
    </Container>
  );
};

export default SideBar;

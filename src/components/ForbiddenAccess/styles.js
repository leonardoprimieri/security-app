import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: var(--primary-color);
`;

export const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;
  margin-top: 30px;
  a {
    margin-left: 22px;
  }

  button {
    cursor: pointer;
    background: var(--red-color);
    border: 0;
    padding: 22px;
    border-radius: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    color: #fff;
    width: 100%;
    margin-right: 24px;
    font-weight: bold;
    font-size: 22px;
    transition: all 400ms ease;
    svg {
      margin-right: 12px;
    }

    :hover {
      filter: brightness(85%);
    }
  }

  button.btn-login {
    background: var(--secondary-color);
  }
`;

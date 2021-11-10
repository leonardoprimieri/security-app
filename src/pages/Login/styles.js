import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const FormArea = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 40%;
  padding: 32px;

  h2 {
    margin: 12px;
  }

  input,
  button {
    margin: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    border: 0;
    width: 70%;
    transition: all 400ms ease;
    border: 2px solid transparent;
  }

  input:focus {
    border: 2px solid var(--primary-color);
  }

  button {
    background: var(--secondary-color);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 400ms ease;
    font-size: 18px;
    :hover {
      filter: brightness(80%);
    }
  }

  button.goBack {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 40px;
    right: 40px;
    width: 4%;
  }

  a {
    color: #fff;
    display: flex;
    align-items: center;
    width: 70%;
    margin: 8px;
    svg {
      margin-right: 12px;
    }
  }

  p {
    margin-bottom: 24px;
  }

  h1 {
    font-family: 'Odibee Sans', cursive;
    font-size: 64px;
    letter-spacing: 3px;
  }
  color: var(--secondary-color);
`;
export const MainArea = styled.main`
  width: 80%;
  background: #212121;
`;

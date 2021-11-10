import styled from 'styled-components';

export const Container = styled.div`
  width: 120px;
  background: #212121;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;

  img {
    width: 100%;
  }

  button {
    background: #ff4d4d;
    padding: 16px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: all 400ms ease;
  }
  a.activeLink {
    button {
      filter: brightness(75%);
    }
  }
`;

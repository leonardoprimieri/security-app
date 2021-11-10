import styled from 'styled-components';

export const Container = styled.div`
  background: #212121;
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
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const FormArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  width: 60%;
`;

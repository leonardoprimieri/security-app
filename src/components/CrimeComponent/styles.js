import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 18px;
  font-weight: 300;

  strong {
    color: red;
  }

  span {
    display: flex;
    flex-direction: column;
    margin: 4px;
    width: 100%;
  }

  a {
    display: flex;
    justify-content: space-between;
    svg {
      margin-bottom: 6px;
    }
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 32px;
    background: var(--red-color);
    border-radius: 20px;
    padding: 12px;
    color: #fff;
    font-size: 14px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background: var(--primary-color);
    padding: 32px;
    border-radius: 20px;
    margin-top: 400px;
    width: 30vw;

    p {
      text-align: center;
    }
  }

  input,
  textarea {
    margin: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    border: 0;
    width: 100%;
    transition: all 400ms ease;
  }

  textarea {
    resize: vertical;
    width: 105%;
    height: 150px;
  }

  button {
    margin: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    border: 0;
    width: 70%;
    transition: all 400ms ease;
    cursor: pointer;

    :hover {
      filter: brightness(95%);
    }
  }

  p,
  button {
    align-self: center;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

import styled from "styled-components";

const Container = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    padding: 1rem;
    width: 100%;
    color: var(--grey-3);
    background-color: var(--grey-0);
    &::placeholder {
      color: var(--grey-1);
    }
  }
  small {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 0.5rem;
  }
`;

const PasswordBox = styled.div`
  display: flex;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: var(--grey-2);
  span {
    display: flex;
    align-items: center;
    padding-inline: 1rem;
    cursor: pointer;
  }
`;

export default { Container, PasswordBox };

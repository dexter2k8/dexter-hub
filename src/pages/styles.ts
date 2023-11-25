import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;
  a {
    background-color: var(--grey-2);
    border-radius: 0.25rem;
    padding: 1rem;
    width: 20rem;
    text-align: center;
    transition: 0.3s;
    &:hover {
      background-color: var(--grey-3);
    }
  }
`;

const Content = styled.div`
  /* max-width: 56rem; */
`;

const FormField = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 20rem;
  padding: 2rem 1rem;
  background-color: var(--grey-3);
  border-radius: 0.25rem;
  h2,
  label:nth-child(2) {
    text-align: center;
  }
  button {
    background-color: var(--color-primary);
    margin-top: 1rem;
    &:hover {
      background-color: var(--color-primary-hover);
    }
  }
`;

export default { Container, Content, FormField };

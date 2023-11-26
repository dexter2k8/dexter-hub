import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 1rem;
  max-width: 22rem;
  min-height: 100vh;
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
    margin-top: 1rem;
  }
`;

export default { Container, FormField };

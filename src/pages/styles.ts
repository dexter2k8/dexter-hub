import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: green;
`;

const Dashboard = styled.div`
  margin: 0 auto;
  max-width: 56rem;
  background-color: red;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 22rem;
  background-color: red;
`;

const FormField = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem 1rem;
  background-color: var(--grey-3);
  border-radius: 0.25rem;
  h2 {
    text-align: center;
  }
`;

export default { Container, Dashboard, Content, FormField };

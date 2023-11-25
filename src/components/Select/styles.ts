import styled from "styled-components";

const Container = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const Component = styled.div`
  padding-inline: 1rem;
  background-color: var(--grey-0);
  border-radius: 0.25rem;
  select {
    cursor: pointer;
    display: block;
    padding-block: 1rem;
    width: 100%;
    color: var(--grey-3);
  }
`;

export default { Container, Component };

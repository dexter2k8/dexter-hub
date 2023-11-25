import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    padding-block: 0;
    padding-inline: 0.5rem;
    font-size: 1.4rem;
    background-color: var(--grey-3);
    &:hover {
      background-color: var(--grey-2);
    }
  }
`;

export default { Container };

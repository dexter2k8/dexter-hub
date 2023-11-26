import styled from "styled-components";

interface IButtonProps {
  primary: boolean;
}

const Button = styled.button<IButtonProps>`
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 1rem;
  transition: 0.3s;
  font-size: ${({ primary }) => (primary ? "1rem" : "1.4rem")};
  padding: ${({ primary }) => (primary ? "1rem" : "0 0.5rem")};
  background-color: ${({ primary }) => (primary ? "var(--color-primary)" : "var(--grey-3)")};
  &:hover {
    background-color: ${({ primary }) =>
      primary ? "var(--color-primary-hover)" : "var(--grey-2)"};
  }
`;

export default { Button };

import styled from "styled-components";

interface IHeaderProps {
  refAlign: string;
}

const Header = styled.header<IHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    width: 100%;
    color: var(--color-primary);
    text-align: ${({ refAlign }) => refAlign};
  }
  a {
    width: fit-content;
  }
`;

export default { Header };

import styled from "styled-components";

interface IModalProps {
  open: boolean;
}

const Container = styled.div<IModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  transition: 0.3s;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  background-color: var(--grey-3);
  padding: 0 1rem 1rem;
  border-radius: 0.5rem;
`;

export default { Container, Header, ModalBody };

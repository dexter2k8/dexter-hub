import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 8rem;
  @media (min-width: 460px) {
    width: 58rem;
    gap: 6rem;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 5rem;
  width: 100vw;
  padding: 1rem;
  border-block: 1px solid var(--grey-3);
`;

const SectionTitle = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media (min-width: 460px) {
    flex-direction: row;
    align-items: center;
    width: 56rem;
  }
`;

export default { Container, Content, SectionTitle };

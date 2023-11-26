import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const AddTechnology = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TechnologyList = styled.ul`
  padding: 0.1rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--grey-3);
  li {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-block: 1rem;
    background-color: var(--grey-4);
  }
`;

const Status = styled.div`
  display: flex;
  gap: 2rem;
  span {
    display: none;
    cursor: pointer;
  }
  @media (min-width: 460px) {
    span {
      display: block;
    }
  }
`;

export default { Container, AddTechnology, TechnologyList, Status };

import Styles from "./styles";
import Header from "../../components/Header";
import TechnologiesList from "../../components/TechnologiesList";

function Dashboard() {
  return (
    <Styles.Container>
      <Header buttonText="Sair" clearData />
      <Styles.Content>
        <Styles.SectionTitle>
          <h1>Olá, Dashboard</h1>
          <small>Bem-vindo(a)!</small>
        </Styles.SectionTitle>
      </Styles.Content>
      <TechnologiesList />
    </Styles.Container>
  );
}

export default Dashboard;

import Styles from "./styles";
import Header from "../../components/Header";
import TechnologiesList from "../../components/TechnologiesList";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  const { userData } = useContext(AuthContext);

  return (
    <Styles.Container>
      <Header buttonText="Sair" clearData />
      <Styles.Content>
        <Styles.SectionTitle>
          <h1>Olá, {userData?.name}</h1>
          <small>{userData?.courseModule}</small>
        </Styles.SectionTitle>
      </Styles.Content>
      <TechnologiesList />
    </Styles.Container>
  );
}

export default Dashboard;

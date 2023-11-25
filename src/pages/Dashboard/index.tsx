import Styles from "./styles";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <Styles.Container>
      <Header buttonText="Sair" clearData />
      <h1>Dashboard</h1>
    </Styles.Container>
  );
}

export default Dashboard;

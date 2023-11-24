import Styles from "../styles";
import Header from "../../components/Header";
import Input from "../../components/Input";

function Login() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Header />
        <Styles.FormField>
          <h2>Login</h2>
          <Input text="Email" />
          <Input text="Senha" password />
        </Styles.FormField>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Login;

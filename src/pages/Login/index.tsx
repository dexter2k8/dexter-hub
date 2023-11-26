import Styles from "../styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/validateLogin";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../../components/Button";

interface ILoginProps {
  email: string;
  password: string;
}

function Login() {
  const { loginUser } = useContext(AuthContext);
  const { control, handleSubmit } = useForm<ILoginProps>({ resolver: yupResolver(schema) });
  //   control-> controla a validação dos dados
  //   handleSubmit-> controla o envio dos dados

  return (
    <Styles.Container>
      <Header />
      <Styles.FormField onSubmit={handleSubmit(loginUser)}>
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          name="email"
          control={control}
          placeholder="Digite aqui seu email"
        />
        <Input
          label="Senha"
          password
          name="password"
          control={control}
          placeholder="Digite aqui sua senha"
        />
        <Button type="submit">Entrar</Button>
      </Styles.FormField>
      <small>Ainda não possui uma conta?</small>
      <Link to={"/register"}>Cadastrar-se</Link>
    </Styles.Container>
  );
}

export default Login;

import Styles from "../styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/validateLogin";

interface ILoginProps {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    formState: { errors },
  } = useForm<ILoginProps>({ resolver: yupResolver(schema) });

  return (
    <Styles.Container>
      <Header />
      <Styles.FormField>
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          message={{ error: errors.email?.message }}
        />
        <Input
          label="Senha"
          password
          placeholder="Digite aqui sua senha"
          {...register("password")}
          message={{ error: errors.password?.message }}
        />
        <button type="submit">Entrar</button>
      </Styles.FormField>
      <small>Ainda não possui uma conta?</small>
      <Link to={"/register"}>Cadastrar-se</Link>
    </Styles.Container>
  );
}

export default Login;

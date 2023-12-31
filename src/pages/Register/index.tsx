import Styles from "../styles";
import Header from "../../components/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/validateRegister";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  courseModule?: string;
}

function Register() {
  const { registerUser } = useContext(AuthContext);
  const { control, handleSubmit } = useForm<IRegisterProps>({ resolver: yupResolver(schema) });
  return (
    <Styles.Container>
      <Header buttonText="Voltar" />
      <Styles.FormField onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <label>Rápido e grátis, vamos nessa</label>
        <Input label="Nome" name="name" control={control} placeholder="Digite aqui seu nome" />
        <Input label="Email" name="email" control={control} placeholder="Digite aqui seu email" />
        <Input
          label="Senha"
          password
          name="password"
          control={control}
          placeholder="Digite aqui sua senha"
        />
        <Input
          label="Confirme sua senha"
          password
          name="confirmPassword"
          control={control}
          placeholder="Digite novamente sua senha"
        />
        <Select
          label="Selecionar módulo"
          control={control}
          name="courseModule"
          options={[
            { value: "Primeiro Módulo (Introdução ao Frontend)", label: "Primeiro Módulo" },
            { value: "Segundo Módulo (Frontend Avançado)", label: "Segundo Módulo" },
          ]}
        />
        <Button type="submit">Cadastrar</Button>
      </Styles.FormField>
    </Styles.Container>
  );
}

export default Register;

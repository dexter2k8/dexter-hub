import { createContext, useEffect, useState } from "react";
import { IDataPost, IDataUser } from "../interfaces";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  loading: boolean;
  userData?: IDataUser;
  setUserData: (data: IDataUser) => void;
  loginUser: (data: object) => void;
  registerUser: (data: object) => void;
}

export const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<IDataUser>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function loginUser(data: object) {
    try {
      const res = await axios.post<IDataPost>("/api/sessions", data); // chamada do miragejs
      // const res = await api.post<IDataPost>("/sessions", data); // chamada do backend
      const { user, token } = res.data;
      //Armazena o token para as requisições onde é necessário
      axios.defaults.headers.authorization = `Bearer ${token}`; // para uso do miragejs
      // api.defaults.headers.authorization = `Bearer ${token}`; // para uso do backend
      setUserData(user);
      localStorage.setItem("@hub:token", token);
      toast.success("Login realizado com sucesso");
      // replace:true para o usuário não retornar ao login quando clicar em voltar
      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) toast.error(error?.response?.headers.message);
      else toast.error("Ops! Algo deu errado");
    }
  }
  async function registerUser(data: object) {
    try {
      await axios.post<IDataPost>("/api/users", data); // chamada do miragejs
      // await api.post<IDataPost>("/users", data); // chamada do backend
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@hub:token");
      if (token) {
        try {
          axios.defaults.headers.authorization = `Bearer ${token}`; // armazena o token na chamada do miragejs
          // api.defaults.headers.authorization = `Bearer ${token}`; // armazena o token na chamada do backend
          const { data } = await axios.get<IDataUser>("/api/profile"); // chamada do miragejs
          // const { data } = await api.get<IDataUser>("/profile"); // chamada do backend
          setUserData(data);
        } catch (error) {
          if (axios.isAxiosError(error)) toast.error(error.message);
          else toast.error("Ops! Algo deu errado");
        }
      }
      //ao recarregar página, autoriza o ProtectedRoutes verificar se o usuário
      //se mantém ou não na rota atual.
      setLoading(false);
    }
    loadUser();
  }, []);

  const values = { userData, setUserData, loading, loginUser, registerUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

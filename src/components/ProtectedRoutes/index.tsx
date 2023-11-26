import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function ProtectedRoutes() {
  const { userData, loading } = useContext(AuthContext);
  //loading impede de retornar a pagina inicial enquanto o useEffect em AuthContext não carrega o usuário logado
  if (loading) return null;

  return userData ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;

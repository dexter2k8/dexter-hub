import { Navigate, Route, Routes } from "react-router-dom";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Cadastro</h1>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesMain;

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function RotaProtegida() {
  // Puxamos as informações do usuário para saber se ele está logado
  const { usuario } = useContext(AuthContext);

  // Se NÃO houver usuário logado, redireciona para o /login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se houver usuário logado, permite o acesso às rotas filhas
  return <Outlet />;
}
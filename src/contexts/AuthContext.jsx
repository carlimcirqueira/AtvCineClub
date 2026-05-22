import { createContext, useState, useEffect } from "react";

// 1. Criamos o contexto de autenticação
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 2. Estado do usuário que já inicia buscando do localStorage
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // 3. Função para fazer login
  function login(nome) {
    setUsuario({ nome });
  }

  // 4. Função para fazer logout
  function logout() {
    setUsuario(null);
  }

  // 5. Efeito colateral para persistir o usuário no navegador
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
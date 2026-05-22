import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext"; // Importa o AuthContext

export default function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);
  const { usuario, logout } = useContext(AuthContext); // Puxa o utilizador logado e o logout

  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "15px 30px", 
      background: tema === "claro" ? "#222" : "#000", 
      color: "#fff"
    }}>
      <h2>MeuCineClube</h2>
      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/Login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        <Link to="/favoritos" style={{ color: "#fff", textDecoration: "none" }}>Favoritos</Link>
        
        {/* Se o usuário estiver logado, mostra o nome dele e o botão de sair. Caso contrário, mostra o link de Login */}
        {usuario ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "#00ffcc" }}>Olá, {usuario.nome}!</span>
            <button onClick={logout} style={{ padding: "4px 8px", cursor: "pointer", background: "red", color: "white", border: "none", borderRadius: "4px" }}>
              Sair
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        )}
        
        <button onClick={alternarTema} style={{ padding: "6px 12px", cursor: "pointer" }}>
          {tema === "claro" ? "Modo Escuro 🌙" : "Modo Claro ☀️"}
        </button>
      </nav>
    </header>
  );
}
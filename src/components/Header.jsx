import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);
  const { usuario, logout } = useContext(AuthContext);

  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "15px 40px", 
      background: tema === "claro" ? "#1e293b" : "#020617", 
      color: "#fff",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      flexWrap: "wrap",
      gap: "15px"
    }}>
      <h2 style={{ margin: 0, color: "#f59e0b", fontSize: "1.6rem" }}>☄️ MeuCineClube</h2>
      <nav style={{ display: "flex", gap: "25px", alignItems: "center", fontWeight: "600" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/favoritos" style={{ color: "#fff", textDecoration: "none" }}>Favoritos</Link>
        
        {usuario ? (
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <span style={{ color: "#34d399" }}>Olá, {usuario.nome}</span>
            <button onClick={logout} style={{ padding: "6px 12px", cursor: "pointer", background: "#ef4444", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold" }}>
              Sair
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        )}
        
        <button onClick={alternarTema} style={{ 
          padding: "8px 14px", cursor: "pointer", background: "transparent", border: "1px solid #f59e0b", color: "#f59e0b", borderRadius: "6px", fontWeight: "bold"
        }}>
          {tema === "claro" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
      </nav>
    </header>
  );
}
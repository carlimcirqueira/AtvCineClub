import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; // Importa o canal criado

export default function Header() {

    const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "15px 30px", 
      background: "#222", 
      color: "#fff" 
    }}>
      <h2 style={{ color: "#fff", textDecoration: "none" }}>MeuCineClube</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        <Link to="/favoritos" style={{ color: "#fff", textDecoration: "none" }}>Favoritos</Link>

        {/* Botão de alternância solicitado no Passo 3 */}
        <button 
          onClick={alternarTema} 
          style={{ 
            padding: "6px 12px", 
            cursor: "pointer",
            background: tema === "claro" ? "#fff" : "#444",
            color: tema === "claro" ? "#000" : "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold"
          }}
        >
          {tema === "claro" ? "Modo Escuro🌙" : "Modo Claro☀️"}
        </button>
      </nav>
    </header>
  );
}
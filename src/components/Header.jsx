import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; 
import { AuthContext } from "../contexts/AuthContext"; 

export default function Header() {
  const { tema, alternarTema } = useContext(ThemeContext); 
  const { usuario, logout } = useContext(AuthContext); 
  return (
    <header className="app-header">
      <h2 className="header-logo">☄️ MeuCineClube</h2>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/favoritos" className="header-link">Favoritos</Link>
        
        {usuario ? (
          <div className="header-user">
            <span className="user-name">Olá, {usuario.nome}</span>
            <button onClick={logout} className="btn-sair">Sair</button>
          </div>
        ) : (
          <Link to="/login" className="header-link">Login</Link>
        )}
        
        <button onClick={alternarTema} className="btn-tema">
          {tema === "claro" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
      </nav>
    </header>
  );
}
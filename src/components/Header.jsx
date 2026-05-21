import { Link } from "react-router-dom";

export default function Header() {
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
      </nav>
    </header>
  );
}
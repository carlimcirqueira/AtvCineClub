import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Login() {
  const [nomeInput, setNomeInput] = useState("");
  const { login } = useContext(AuthContext);
  const { tema } = useContext(ThemeContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!nomeInput.trim()) return alert("Por favor, informe seu nome!");
    login(nomeInput);
    navigate("/");
  }

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "80px auto", 
      padding: "40px 30px",
      background: tema === "claro" ? "#ffffff" : "#1e293b",
      borderRadius: "16px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      textAlign: "center",
      border: tema === "claro" ? "1px solid #e2e8f0" : "1px solid #334155"
    }}>
      <h1 style={{ margin: "0 0 10px 0", fontSize: "1.8rem" }}>👋 Bem-vindo!</h1>
      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>Faça login para salvar seus favoritos</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          placeholder="Como quer ser chamado?"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          style={{ 
            padding: "12px", 
            borderRadius: "8px", 
            border: "1px solid #475569",
            background: tema === "claro" ? "#fff" : "#0f172a",
            color: tema === "claro" ? "#000" : "#fff",
            fontSize: "1rem"
          }}
        />
        <button type="submit" style={{ 
          padding: "12px", 
          background: "#f59e0b", 
          color: "#fff", 
          border: "none", 
          borderRadius: "8px", 
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Entrar no Clube
        </button>
      </form>
    </div>
  );
}
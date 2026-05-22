import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Importa o contexto de login

export default function Login() {
  const [nomeInput, setNomeInput] = useState(""); // Estado local para controlar o input [cite: 362]
  const { login } = useContext(AuthContext); // Puxa a função de login do contexto [cite: 362]
  const navigate = useNavigate(); // Hook do React Router para navegação programática [cite: 362]

  function handleSubmit(e) {
    e.preventDefault(); // Previne o recarregamento padrão da página
    if (!nomeInput.trim()) return alert("Por favor, digite um nome!");

    login(nomeInput); // Executa a função do contexto passando o nome 
    navigate("/"); // Redireciona o utilizador de volta para a Home instantaneamente 
  }

  return (
    <div style={{ maxWidth: "300px", margin: "40px auto", textAlign: "center" }}>
      <h1>Entrar no MeuCineClube</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer", fontWeight: "bold" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
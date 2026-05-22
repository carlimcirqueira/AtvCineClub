import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; 

export default function Login() {
  const [nomeInput, setNomeInput] = useState("");
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!nomeInput.trim()) return alert("Por favor, informe seu nome!");
    login(nomeInput);
    navigate("/");
  }

  return (
    <div className="login-card">
      <h1>👋 Bem-vindo!</h1>
      <p className="login-subtitulo">Faça login para salvar seus favoritos</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          placeholder="Como quer ser chamado?"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="btn-laranja">Entrar no Clube</button>
      </form>
    </div>
  );
}
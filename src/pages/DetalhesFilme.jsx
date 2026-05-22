import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { obterFilmePorId } from "../services/filmeService";
import { FavoritosContext } from "../contexts/FavoritosContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function DetalhesFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null); // Estado para capturar erros de carregamento
  
  const { adicionarFavorito } = useContext(FavoritosContext);
  const { tema } = useContext(ThemeContext);

  useEffect(() => {
    try {
      const filmeEncontrado = obterFilmePorId(id);
      setFilme(filmeEncontrado);
    } catch (err) {
      setErro(err.message); // Exibe mensagem amigável de erro se falhar
    }
  }, [id]);

  if (erro) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ color: "red" }}>⚠️ {erro}</h2>
        <button onClick={() => navigate("/")} style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}>
          Voltar para Home
        </button>
      </div>
    );
  }

  if (!filme) return <p style={{ textAlign: "center" }}>Carregando...</p>;

  return (
    <div style={{ 
      maxWidth: "900px", 
      margin: "40px auto", 
      display: "flex", 
      gap: "40px", 
      flexWrap: "wrap",
      background: tema === "claro" ? "#ffffff" : "#1e293b",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)"
    }}>
      <img 
        src={filme.poster} 
        alt={filme.titulo} 
        style={{ width: "300px", borderRadius: "8px", margin: "0 auto", display: "block" }} 
      />

      <div style={{ flex: "1", minWidth: "300px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <h1 style={{ margin: 0, borderBottom: "2px solid #f59e0b", paddingBottom: "10px" }}>{filme.titulo}</h1>
        <p style={{ lineHeight: "1.6" }}><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco}</p>
        
        <button 
          onClick={() => adicionarFavorito(filme)} // Dispara o feedback "Filme adicionado!" configurado no passo 8
          style={{ 
            padding: "12px 20px", background: "#f59e0b", color: "#fff", 
            border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", 
            marginTop: "auto", fontSize: "1rem"
          }}
        >
          ♥ Adicionar aos Favoritos
        </button>
      </div>
    </div>
  );
}
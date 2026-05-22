import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext"; // 1. Importar o contexto

const DETALHES_MOCK = {
  "1": { id: "1", titulo: "Inception", sinopse: "Um ladrão que rouba segredos...", diretor: "Christopher Nolan", elenco: "Leonardo DiCaprio...", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
  "2": { id: "2", titulo: "Interestelar", sinopse: "Uma equipe de exploradores...", diretor: "Christopher Nolan", elenco: "Matthew McConaughey...", poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
  "3": { id: "3", titulo: "Batman: O Cavaleiro das Trevas", sinopse: "Quando a ameaça...", diretor: "Christopher Nolan", elenco: "Christian Bale...", poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&q=80" }
};

export default function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  
  // 2. Puxar a função adicionarFavorito usando o useContext
  const { adicionarFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    setFilme(DETALHES_MOCK[id]);
  }, [id]);

  if (!filme) return <p style={{ textAlign: "center" }}>Filme não encontrado!</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", display: "flex", gap: "30px", alignItems: "start" }}>
      <img src={filme.poster} alt={filme.titulo} style={{ width: "220px", borderRadius: "8px" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h1>{filme.titulo}</h1>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco}</p>
        
        {/* 3. CONECTAR A FUNÇÃO NO EVENTO ONCLICK DO BOTÃO */}
        <button 
          onClick={() => adicionarFavorito(filme)}
          style={{ 
            padding: "10px 15px", background: "#00ffcc", color: "#000", 
            border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", marginTop: "10px"
          }}
        >
          ♥ Adicionar aos Favoritos
        </button>
      </div>
    </div>
  );
}
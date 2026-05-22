import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext"; // 1. Importar o contexto

export default function Favoritos() {
  // 2. Puxar a lista de favoritos e a função de remover do contexto global
  const { favoritos, removerFavorito } = useContext(FavoritosContext);

  // 3. Validação caso a lista esteja vazia
  if (favoritos.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Meus Filmes Favoritos</h1>
        <p>Ainda não adicionou nenhum filme aos favoritos. Vá até à Home!</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Meus Filmes Favoritos</h1>
      
      <div style={{ 
        display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" 
      }}>
        {/* 4. Mapear e renderizar a lista de favoritos */}
        {favoritos.map((filme) => (
          <div key={filme.id} style={{ 
            border: "1px solid #555", borderRadius: "8px", padding: "15px", width: "180px",
            background: "rgba(255, 255, 255, 0.05)"
          }}>
            <img 
              src={filme.poster} 
              alt={filme.titulo} 
              style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "4px" }} 
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{filme.titulo}</h3>
            
            {/* Botão para acionar a remoção */}
            <button 
              onClick={() => removerFavorito(filme.id)}
              style={{ 
                width: "100%", padding: "6px", background: "red", color: "white", 
                border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold"
              }}
            >
              Remover ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Favoritos() {
  const { favoritos, removerFavorito } = useContext(FavoritosContext);
  const { tema } = useContext(ThemeContext);

  // Mensagem de feedback caso a lista esteja vazia (Exigência do Passo 9)
  if (favoritos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>Meus Favoritos</h1>
        <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>Sua lista de favoritos está vazia no momento. ✨</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Meus Favoritos</h1>
      
      <div style={{ 
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 0.3fr))", gap: "30px", justifyContent: "center"
      }}>
        {favoritos.map((filme) => (
          <div key={filme.id} style={{ 
            background: tema === "claro" ? "#ffffff" : "#1e293b",
            borderRadius: "12px", overflow: "hidden",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
          }}>
            <img src={filme.poster} alt={filme.titulo} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h3 style={{ fontSize: "1rem", margin: "0 0 15px 0", minHeight: "40px" }}>{filme.titulo}</h3>
              <button 
                onClick={() => removerFavorito(filme.id)}
                style={{ 
                  width: "100%", padding: "8px", background: "#ef4444", color: "white", 
                  border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold"
                }}
              >
                Remover ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
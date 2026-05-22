import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext"; 

export default function Favoritos() {
  const { favoritos, removerFavorito } = useContext(FavoritosContext);

  if (favoritos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 className="titulo-central">Meus Favoritos</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--texto-secundario)" }}>Sua lista de favoritos está vazia no momento. ✨</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="titulo-central">Meus Favoritos</h1>
      <div className="filmes-grid">
        {favoritos.map((filme) => (
          <div key={filme.id} className="filme-card">
            <img src={filme.poster} alt={filme.titulo} className="filme-poster" />
            <div className="filme-corpo">
              <h3 className="filme-titulo">{filme.titulo}</h3>
              <button onClick={() => removerFavorito(filme.id)} className="btn-laranja" style={{ backgroundColor: "#ef4444" }}>
                Remover ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
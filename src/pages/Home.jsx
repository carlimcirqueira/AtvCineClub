import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Array de dados mockados (conforme sugerido no PDF para o projeto)
const FILMES_MOCK = [
  { id: "1", titulo: "Inception", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&q=80" },
  { id: "2", titulo: "Interestelar", poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80" },
  { id: "3", titulo: "Batman: O Cavaleiro das Trevas", poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=200&q=80" }
];

export default function Home() {
  // 1. useState para armazenar a lista de filmes
  const [filmes, setFilmes] = useState([]);

  // 2. useEffect para buscar/carregar os filmes ao montar o componente
  useEffect(() => {
    // Simulando uma busca de dados (fetch) carregando o nosso Array Mock
    setFilmes(FILMES_MOCK);
  }, []); // Array de dependências vazio garante que rode apenas 1 vez ao abrir a tela

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Catálogo de Filmes</h1>
      
      {/* Container dos Cards de Filmes */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        flexWrap: "wrap", 
        marginTop: "30px" 
      }}>
        {/* Renderização da lista de filmes usando .map */}
        {filmes.map((filme) => (
          <div key={filme.id} style={{ 
            border: "1px solid #555", 
            borderRadius: "8px", 
            padding: "15px", 
            width: "180px",
            background: "rgba(255, 255, 255, 0.05)"
          }}>
            {/* Exibição do Poster do Filme */}
            <img 
              src={filme.poster} 
              alt={filme.titulo} 
              style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "4px" }} 
            />
            {/* Título do Filme */}
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{filme.titulo}</h3>
            
            {/* O REDIRECIONAMENTO EXIGIDO: Link dinâmico com o ID do filme */}
            <Link 
              to={`/filme/${filme.id}`} 
              style={{ 
                display: "inline-block", 
                marginTop: "10px", 
                color: "#00ffcc", 
                textDecoration: "none", 
                fontWeight: "bold" 
              }}
            >
              Ver Detalhes →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
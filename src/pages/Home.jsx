import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Lista com 12 filmes de Dragon Ball integrada diretamente no arquivo da Home
const FILMES_DRAGON_BALL = [
  { id: "db-1", titulo: "Dragon Ball: A Lenda de Shenlong (1986)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=A+Lenda+de+Shenlong" },
  { id: "db-2", titulo: "Dragon Ball: O Castelo do Diabo (1987)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Castelo+do+Diabo" },
  { id: "db-3", titulo: "Dragon Ball: Uma Aventura Mística (1988)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Aventura+Mistica" },
  { id: "db-4", titulo: "Dragon Ball Z: Devolva-me meu Gohan!! (1989)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Devolva-me+meu+Gohan" },
  { id: "db-5", titulo: "Dragon Ball Z: O Homem Mais Forte do Mundo (1990)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Homem+Mais+Forte" },
  { id: "db-6", titulo: "Dragon Ball Z: A Árvore do Poder (1990)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=A+Arvore+do+Poder" },
  { id: "db-7", titulo: "Dragon Ball Z: O Super Saiyajin Goku (1991)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Super+Saiyajin+Goku" },
  { id: "db-8", titulo: "Dragon Ball Z: Uma Vingança Para Cooler (1991)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Vinganca+Para+Cooler" },
  { id: "db-9", titulo: "Dragon Ball Z: O Retorno de Cooler (1992)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Retorno+de+Cooler" },
  { id: "db-10", titulo: "Dragon Ball Z: O Retorno dos Androides (1992)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Retorno+dos+Androides" },
  { id: "db-11", titulo: "Dragon Ball Super: Broly (2018)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=DB+Super:+Broly" },
  { id: "db-12", titulo: "Dragon Ball Super: Super Hero (2022)", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Super+Hero" }
];

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Carrega a lista local direto no estado
    setFilmes(FILMES_DRAGON_BALL);
  }, []);

  return (
    <div className="container">
      <h1 className="titulo-central">Catálogo Dragon Ball</h1>
      
      <div className="filmes-grid">
        {filmes.map((filme) => (
          <div key={filme.id} className="filme-card">
            <img src={filme.poster} alt={filme.titulo} className="filme-poster" />
            <div className="filme-corpo">
              <h3 className="filme-titulo">{filme.titulo}</h3>
              <Link to={`/filme/${filme.id}`} className="btn-laranja">
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
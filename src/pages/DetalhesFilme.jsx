import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Dados mockados estendidos para exibir os detalhes exigidos pelo projeto
const DETALHES_MOCK = {
  "1": { 
    titulo: "Inception", 
    sinopse: "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.", 
    diretor: "Christopher Nolan", 
    elenco: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page", 
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" 
  },
  "2": { 
    titulo: "Interestelar", 
    sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.", 
    diretor: "Christopher Nolan", 
    elenco: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", 
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" 
  },
  "3": { 
    titulo: "Batman: O Cavaleiro das Trevas", 
    sinopse: "Quando a ameaça conhecida como O Coringa surge de seu passado, ele causa estragos e caos no povo de Gotham, forçando o herói a aceitar um dos maiores testes psicológicos e físicos da sua vida.", 
    diretor: "Christopher Nolan", 
    elenco: "Christian Bale, Heath Ledger, Aaron Eckhart", 
    poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&q=80" 
  }
};

export default function DetalhesFilme() {
  // 1. Usar useParams() para ler o :id da URL (Ex: /filme/2 -> id será "2")
  const { id } = useParams();
  
  // useState para armazenar o filme selecionado
  const [filme, setFilme] = useState(null);

  // 2. Usar useEffect para buscar os detalhes sempre que o ID mudar
  useEffect(() => {
    // Procura o filme correspondente no nosso objeto Mock utilizando o ID da URL
    const filmeEncontrado = DETALHES_MOCK[id];
    setFilme(filmeEncontrado);
  }, [id]); // A dependência [id] garante que o efeito rode se o usuário mudar de filme

  // Caso o ID digitado não exista no banco de dados simulado
  if (!filme) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Filme não encontrado!</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", display: "flex", gap: "30px", alignItems: "start" }}>
      {/* Exibição do Poster */}
      <img 
        src={filme.poster} 
        alt={filme.titulo} 
        style={{ width: "220px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }} 
      />

      {/* Informações Textuais Requisitadas */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h1 style={{ margin: 0 }}>{filme.titulo}</h1>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco}</p>
        
        {/* Botão pedido: Adicionar aos favoritos (ainda sem funcionalidade) */}
        <button style={{ 
          padding: "10px 15px", 
          background: "#00ffcc", 
          color: "#000", 
          border: "none", 
          borderRadius: "4px", 
          fontWeight: "bold", 
          cursor: "pointer",
          marginTop: "10px"
        }}>
          ♥ Adicionar aos Favoritos
        </button>
      </div>
    </div>
  );
}
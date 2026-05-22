import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { obterTodosOsFilmes } from "../services/filmeService";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const { tema } = useContext(ThemeContext);

  useEffect(() => {
    setFilmes(obterTodosOsFilmes());
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2.5rem" }}>
        Catálogo Dragon Ball
      </h1>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "30px",
        padding: "10px"
      }}>
        {filmes.map((filme) => (
          <div key={filme.id} style={{ 
            background: tema === "claro" ? "#ffffff" : "#1e293b",
            borderRadius: "12px", 
            overflow: "hidden",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s ease",
            border: tema === "claro" ? "1px solid #e2e8f0" : "1px solid #334155"
          }}>
            <img 
              src={filme.poster} 
              alt={filme.titulo} 
              style={{ width: "100%", height: "360px", objectFit: "cover" }} 
            />
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3 style={{ margin: "0 0 15px 0", fontSize: "1.1rem", minHeight: "50px" }}>{filme.titulo}</h3>
              <Link 
                to={`/filme/${filme.id}`} 
                style={{ 
                  display: "block", 
                  padding: "10px", 
                  background: "#f59e0b", // Laranja Dragon Ball
                  color: "#fff", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  fontWeight: "bold"
                }}
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
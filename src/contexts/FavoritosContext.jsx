import { createContext, useState, useEffect } from "react";

// Criamos o contexto de favoritos
export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  // Estado que já inicia lendo o que está guardado no localStorage (se houver)
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem("favoritos");
    return salvos ? JSON.parse(salvos) : [];
  });

  // Função para adicionar um filme aos favoritos (evitando duplicados)
  function adicionarFavorito(filme) {
    setFavoritos((atuais) => {
      const jaExiste = atuais.some((f) => f.id === filme.id);
      if (jaExiste) {
        alert("Este filme já está nos seus favoritos!");
        return atuais;
      }
      alert("Filme adicionado aos favoritos!");
      return [...atuais, filme];
    });
  }

  // Função para remover um filme dos favoritos pelo ID
  function removerFavorito(id) {
    setFavoritos((atuais) => atuais.filter((f) => f.id !== id));
  }

  // useEffect para salvar no localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
 
  const [tema, setTema] = useState("claro");

  // 1. Função para alternar o valor do estado
  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  }

  // 2. Efeito colateral (useEffect) para aplicar o tema diretamente no <body>
  useEffect(() => {
    if (tema === "escuro") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [tema]); // Esse efeito roda toda vez que o 'tema' mudar

  return (
    // 3. Disponibilizamos o estado e a função para quem quiser ouvir
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
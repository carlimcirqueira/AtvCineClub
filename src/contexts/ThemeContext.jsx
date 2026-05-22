import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("escuro"); // Iniciando no modo escuro por padrão (estilo cinema)

  function alternarTema() {
    setTema((atual) => (atual === "claro" ? "escuro" : "claro"));
  }

  useEffect(() => {
    if (tema === "escuro") {
      document.body.style.backgroundColor = "#0f172a"; // Azul ardósia escuro
      document.body.style.color = "#f8fafc";
    } else {
      document.body.style.backgroundColor = "#f8fafc"; // Off-white limpo
      document.body.style.color = "#0f172a";
    }
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Segoe UI', Roboto, sans-serif";
    document.body.style.transition = "all 0.3s ease";
  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import DetalhesFilme from "./pages/DetalhesFilme"; // 1. IMPORTAR A NOVA PÁGINA
import Header from "./components/Header";
import RotaProtegida from "./routes/RotaProtegida";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header /> 
          <div style={{ padding: "20px" }}>
            <Routes>
              {/* Rotas Públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              
              {/* AQUI ESTÁ A NOVA ROTA DINÂMICA DO PASSO 7: */}
              <Route path="/filme/:id" element={<DetalhesFilme />} />

              {/* Rotas Protegidas */}
              <Route element={<RotaProtegida />}>
                <Route path="/favoritos" element={<Favoritos />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
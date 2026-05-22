import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritosProvider } from "./contexts/FavoritosContext"; // 1. IMPORTAR O PROVIDER
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import DetalhesFilme from "./pages/DetalhesFilme";
import Header from "./components/Header";
import RotaProtegida from "./routes/RotaProtegida";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        {/* 2. ENVOLVER A APLICAÇÃO COM O FAVORITOS PROVIDER */}
        <FavoritosProvider>
          <BrowserRouter>
            <Header /> 
            <div style={{ padding: "20px" }}>
              <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/filme/:id" element={<DetalhesFilme />} />

                {/* Rotas Protegidas */}
                <Route element={<RotaProtegida />}>
                  <Route path="/favoritos" element={<Favoritos />} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
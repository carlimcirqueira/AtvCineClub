import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import RotaProtegida from "./routes/RotaProtegida"; // 1. Importa a nova rota protegida

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header /> 
          <div style={{ padding: "20px" }}>
            <Routes>
              {/* Rotas Públicas: Qualquer pessoa pode acessar */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              {/* Rotas Protegidas: Só quem passou pelo filtro da RotaProtegida */}
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* O Header fica fora de <Routes> para aparecer em todas as páginas */}
        <Header /> 

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
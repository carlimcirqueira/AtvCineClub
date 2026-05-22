import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";

// Objeto com os dados completos integrado para busca interna por ID
const DETALHES_DRAGON_BALL = {
  "db-1": { titulo: "Dragon Ball: A Lenda de Shenlong (1986)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Hiromi Tsuru", sinopse: "A primeira aventura de Goku para encontrar as Esferas do Dragão junto com Bulma, Oolong e Yamcha enquanto enfrentam o Rei Gurumes.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=A+Lenda+de+Shenlong" },
  "db-2": { titulo: "Dragon Ball: O Castelo do Diabo (1987)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Mayumi Tanaka", sinopse: "Goku e Kuririn treinam com Mestre Kame e são enviados para resgatar uma princesa adormecida em um castelo cheio de demônios vampiros.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Castelo+do+Diabo" },
  "db-3": { titulo: "Dragon Ball: Uma Aventura Mística (1988)", diretor: "Kazuhisa Takenouchi", elenco: "Masako Nozawa, Mayumi Tanaka", sinopse: "Goku e Kuririn participam de um torneio mundial de artes marciais na terra do Imperador Chaos, onde uma conspiração maligna está em andamento.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Aventura+Mistica" },
  "db-4": { titulo: "Dragon Ball Z: Devolva-me meu Gohan!! (1989)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Toshio Furukawa", sinopse: "O terrível Garlic Jr. sequestra o pequeno Gohan para obter a imortalidade através das Esferas do Dragão. Goku e Piccolo precisam se aliar.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Devolva-me+meu+Gohan" },
  "db-5": { titulo: "Dragon Ball Z: O Homem Mais Forte do Mundo (1990)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Toshio Furukawa", sinopse: "O cérebro do Dr. Wheelo é libertado de seu túmulo de gelo eterno e ele busca o corpo do lutador mais forte do mundo para dominá-lo.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Homem+Mais+Forte" },
  "db-6": { titulo: "Dragon Ball Z: A Árvore do Poder (1990)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Mayumi Tanaka", sinopse: "Turles, um pirata espacial Saiyajin idêntico a Goku, planta uma árvore mística que consome a energia vital da Terra para gerar frutos de poder divino.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=A+Arvore+do+Poder" },
  "db-7": { titulo: "Dragon Ball Z: O Super Saiyajin Goku (1991)", diretor: "Mitsuo Hashimoto", elenco: "Masako Nozawa, Toshio Furukawa", sinopse: "Um Namekuseijin idoso e maligno chamado Lord Slug chega com sua frota espacial e usa a Terra para recuperar sua juventude eterna.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Super+Saiyajin+Goku" },
  "db-8": { titulo: "Dragon Ball Z: Uma Vingança Para Cooler (1991)", diretor: "Mitsuo Hashimoto", elenco: "Masako Nozawa, Ryō Horikawa", sinopse: "Cooler, o irmão mais velho de Freeza, viaja para a Terra com seu esquadrão blindado para aniquilar Goku e restaurar a honra da sua família.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Vinganca+Para+Cooler" },
  "db-9": { titulo: "Dragon Ball Z: O Retorno de Cooler (1992)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Ryō Horikawa", sinopse: "Cooler funde-se com a Estrela Gete e ressurge como um exército de ciborgues metálicos que atacam o Novo Planeta Namek.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=O+Retorno+de+Cooler" },
  "db-10": { titulo: "Dragon Ball Z: O Retorno dos Androides (1992)", diretor: "Daisuke Nishio", elenco: "Masako Nozawa, Ryō Horikawa", sinopse: "Após a morte do Dr. Gero, seu supercomputador desperta os Androides 13, 14 e 15 com a única missão de trucidar Goku.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Retorno+dos+Androides" },
  "db-11": { titulo: "Dragon Ball Super: Broly (2018)", diretor: "Tatsuya Nagamine", elenco: "Masako Nozawa, Ryō Horikawa, Bin Shimada", sinopse: "Goku e Vegeta deparam-se com Broly, um guerreiro Saiyajin exilado cujo poder bruto acumulado ultrapassa os limites dos deuses.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=DB+Super:+Broly" },
  "db-12": { titulo: "Dragon Ball Super: Super Hero (2022)", diretor: "Tetsuro Kodama", elenco: "Masako Nozawa, Toshio Furukawa", sinopse: "O exército Red Ribbon cria os novos androides supremos Gamma 1 e Gamma 2. Com Goku fora, Gohan e Piccolo precisam salvar o mundo.", poster: "https://placehold.co/400x600/f59e0b/ffffff?text=Super+Hero" }
};

export default function DetalhesFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null);
  const { adicionarFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    // Busca o filme diretamente no objeto local usando o ID da URL
    const filmeEncontrado = DETALHES_DRAGON_BALL[id];
    
    if (!filmeEncontrado) {
      setErro("Filme não localizado no acervo Saiyajin!"); // Tratamento de erro local
    } else {
      setFilme(filmeEncontrado);
      setErro(null);
    }
  }, [id]);

  if (erro) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ color: "#ef4444" }}>⚠️ {erro}</h2>
        <button onClick={() => navigate("/")} className="btn-laranja" style={{ display: "inline-block" }}>
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  if (!filme) return <p style={{ textAlign: "center" }}>Carregando dados...</p>;

  return (
    <div className="detalhes-container">
      <img src={filme.poster} alt={filme.titulo} className="detalhes-img" />
      <div className="detalhes-info">
        <h1 className="detalhes-titulo">{filme.titulo}</h1>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco}</p>
        <button 
          onClick={() => adicionarFavorito({ id, titulo: filme.titulo, poster: filme.poster })} 
          className="btn-laranja" 
          style={{ marginTop: "auto" }}
        >
          ♥ Adicionar aos Favoritos
        </button>
      </div>
    </div>
  );
}
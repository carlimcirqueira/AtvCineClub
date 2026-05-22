# ☄️ MeuCineClube - Catálogo Dragon Ball

## 📋 Descrição do Projeto
O **MeuCineClube** é uma aplicação web do tipo SPA (Single Page Application) desenvolvida em React. O projeto consiste em um catálogo interativo com 12 filmes da franquia *Dragon Ball*, onde o usuário pode simular uma autenticação, navegar entre páginas dinâmicas de forma instantânea, visualizar detalhes detalhados de cada obra e gerenciar uma lista exclusiva de favoritos.

Este projeto foi desenvolvido como atividade prática para a disciplina de Desenvolvimento de Software para Web, sob orientação da Profª Marianne Lacerda Dutra Theodoro.

---

## 🚀 Funcionalidades
A aplicação conta com as seguintes regras de negócio e recursos visuais:
* **Página de Login Simulado:** Permite que o usuário insira seu nome para se autenticar no clube, com redirecionamento programático.
* **Catálogo na Home:** Exibição de uma grade de cards com pôsteres e títulos dos filmes mapeados dinamicamente.
* **Página de Detalhes (Rota Dinâmica):** Exibe informações aprofundadas como sinopse, diretor e elenco com base no ID capturado na URL.
* **Página de Favoritos Protegida:** Uma área restrita que bloqueia acessos não autorizados e lista os filmes marcados pelo usuário, contendo opção de remoção.
* **Tema Alternável (Claro/Escuro):** Controle global de cores inspirado em plataformas de streaming, adaptando textos e fundos de forma responsiva.
* **Persistência Local:** O estado do usuário logado e a lista de favoritos permanecem salvos mesmo após o recarregamento da página.
* **Mensagens de Feedback e Erros:** Avisos amigáveis para listas vazias ou tentativas de acessar IDs de filmes inexistentes.

---

## 🛠️ Tecnologias Utilizadas
Os seguintes recursos e bibliotecas foram empregados no ecossistema da aplicação:
* **React** (via Vite para empacotamento rápido)
* **React Router DOM** (gerenciamento de rotas e histórico no cliente)
* **CSS Custom Properties** (variáveis CSS nativas para o sistema de temas)

---

## 🧠 Conceitos React Aplicados
A estrutura do código foi projetada seguindo as boas práticas de arquitetura e o princípio de separação de responsabilidades:

### 1. Hooks Nativos do React
* **`useState`:** Utilizado para gerenciar memórias locais, como os textos dos inputs e os arrays de filmes renderizados na tela.
* **`useEffect`:** Responsável por gerenciar efeitos colaterais como a injeção de classes no `<body>` para alteração de temas, sincronização entre abas e a leitura/escrita de strings JSON no `localStorage`.
* **`useContext`:** Aplicado para combater o *Prop Drilling*, criando canais diretos de comunicação global para o Tema, a Autenticação e os Favoritos.

### 2. Ecossistema React Router
* **`BrowserRouter` e `Routes`:** Componentes declarativos para controle de histórico no topo da aplicação.
* **`Link`:** Substituição da tag `<a>` padrão para garantir a transição de telas sem o recarregamento total da página (SPA).
* **`useNavigate`:** Hook para redirecionar o usuário programaticamente após o envio do formulário de login.
* **`useParams`:** Leitura de parâmetros dinâmicos (`:id`) contidos no endereço do navegador para exibição de dados específicos.

### 3. Padrão "Rota Protegida" (Gatekeeper)
* Implementação de uma rota aninhada utilizando os componentes `<Outlet />` e `<Navigate />` para validar se há um usuário ativo no contexto antes de liberar o acesso a caminhos privados.

### 4. Imutabilidade e Cleanup
* **Imutabilidade:** Atualizações de estado feitas estritamente de forma previsível por meio de operadores *Spread* (`...`), `.map()` e `.filter()`.
* **Cleanup:** Funções de limpeza acopladas ao retorno dos efeitos colaterais para remover ouvintes de eventos do navegador (`window.removeEventListener`) assim que os componentes são desmontados, poupando memória.

---

## 📂 Estrutura de Pastas Recomendada
O diretório `src/` foi organizado de acordo com os seguintes domínios de responsabilidade:
```text
src/
├── components/   # Componentes reutilizáveis compartilhados (Header)
├── contexts/     # Contextos e Providers (Auth, Theme, Favoritos)
├── pages/        # Telas completas da aplicação (Home, Login, Favoritos, Detalhes)
├── routes/       # Definição e lógica de segurança das rotas (RotaProtegida)
├── App.jsx       # Componente raiz com o mapeamento e Providers no nível certo
├── index.css     # Estilos globais e definição de variáveis CSS de tema
└── main.jsx      # Ponto de entrada da aplicação
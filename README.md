# 🛒 ByteStore — Loja Virtual de Tecnologia

> Projeto desenvolvido como desafio prático final para o encerramento do processo de Trainee da **CP2 Júnior**.

O **ByteStore** é um e-commerce moderno e responsivo voltado para periféricos, setups e eletrônicos, construído com **React**, **Vite** e **CSS Modules**. O projeto simula o fluxo completo de navegação de uma loja virtual, desde a exploração e filtragem de catálogo até o gerenciamento dinâmico do carrinho de compras.

---

## Funcionalidades

- **Navegação com Rotas**: Transição instantânea entre as páginas de **Início**, **Catálogo** e **Carrinho** utilizando `react-router-dom`, sem recarregar o navegador.
- **Header Fixo**: Barra de navegação que acompanha a rolagem da página com contador de itens no carrinho em tempo real.
- **Rolagem Suave**: Botão de atalho para rolar suavemente até a seção de produtos em destaque na Home.
- **Filtro por Departamento**: Ao clicar em uma categoria na Home (Fones, Smartwatches, Periféricos, Monitores), o usuário é direcionado ao Catálogo já com os produtos daquela categoria filtrados.
- **Busca e Filtros no Catálogo**:
  - Busca textual em tempo real por nome do produto.
  - Filtro interativo por botões.
  - Contador dinâmico da quantidade de produtos encontrados.
- **Modal de Detalhes**: Janela popup com especificações detalhadas e descrição de cada produto ao clicar em "Detalhes".
- **Carrinho de Compras Interativo**:
  - Adição de produtos diretamente da Home ou do Catálogo.
  - Remoção de itens individuais da lista.
  - Botão para limpar todo o carrinho com feedback de tela vazia.
  - Cálculo automático de subtotal, frete grátis e simulação de parcelamento sem juros.

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca para construção das interfaces de usuário baseada em componentes.
- **[Vite](https://vitejs.dev/)** — Ferramenta de build rápida e moderna para o ecossistema frontend.
- **[React Router DOM](https://reactrouter.com/)** — Gerenciamento de rotas e navegação client-side.
- **[CSS Modules](https://github.com/css-modules/css-modules)** — Estilização modular com escopo local.
- **[Phosphor Icons](https://phosphoricons.com/)** — Biblioteca flexível de ícones vetorizados para React.

---

## Sobre o Projeto

Este projeto representa a consolidação dos aprendizados adquiridos durante o período de trainee na **CP2 Júnior**, contemplando:
- Criação e ciclo de vida de componentes funcionais em React.
- Manipulação e elevação de estado (`useState`, `useEffect`).
- Comunicação entre componentes via `props`.
- Boas práticas de semântica HTML e arquitetura CSS.

---

Desenvolvido por **Felipe Froes** 🚀

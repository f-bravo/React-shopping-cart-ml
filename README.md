# React Shopping Cart - Mercado Livre API

Este é um projeto desenvolvido em **React** utilizando a **API do Mercado Livre** para criar um carrinho de compras funcional. Ele permite buscar produtos, adicionar e remover itens do carrinho, e calcular o valor total dos produtos selecionados.

## Funcionalidades

- **Busca de Produtos**: Busca produtos na API do Mercado Livre em tempo real.
- **Adicionar ao Carrinho**: Permite adicionar produtos selecionados ao carrinho.
- **Remover do Carrinho**: Possibilidade de remover itens do carrinho.
- **Cálculo Total**: O valor total dos itens é atualizado dinamicamente.
  
## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **API do Mercado Livre**: Para realizar as buscas de produtos.
- **React Icons**: Biblioteca para exibição de ícones.
- **Vite**: Ferramenta de build rápida para desenvolvimento de projetos com React.
- **ESLint**: Ferramenta para garantir a qualidade do código.

## Estrutura

├── public
├── src
│   ├── components
│   │   ├── ProductSearch.js  # Componente para busca de produtos
│   │   ├── Cart.js           # Componente do carrinho de compras
│   │   ├── CartItem.js       # Componente individual para os itens do carrinho
│   ├── services
│   │   └── api.js            # Configuração das requisições para a API
│   ├── App.js                # Componente principal da aplicação
│   └── main.jsx              # Ponto de entrada da aplicação
├── .eslintrc.json            # Configuração do ESLint
├── vite.config.js            # Configuração do Vite
└── package.json


## Licença

Este projeto está licenciado sob a licença MIT.


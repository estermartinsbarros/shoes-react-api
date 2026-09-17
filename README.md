# Loja de Tênis

Vitrine virtual de um e-commerce de tênis masculinos, desenvolvida em React (Vite + TypeScript), consumindo dados da API pública [DummyJSON](https://dummyjson.com/).

## Funcionalidades

- Listagem de produtos da categoria "Men's Shoes" via API
- Exibição de imagem, título e preço reais de cada produto
- Estado de carregamento (loading) enquanto os dados são buscados
- Layout responsivo, baseado em protótipo do Figma

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS (Flexbox e Grid)
- Fetch API

## Como rodar o projeto

1. Clone o repositório:
```bash
   git clone https://github.com/estermartinsbarros/shoes-react-api.git
```

2. Entre na pasta do projeto:
```bash
   cd tenis-projeto
```

3. Instale as dependências:
```bash
   npm install
```

4. Rode o projeto em modo de desenvolvimento:
```bash
   npm run dev
```

5. Abra o navegador no endereço mostrado no terminal (geralmente `http://localhost:5173`)

## API utilizada

Os produtos são buscados no endpoint:
https://dummyjson.com/products/category/mens-shoes

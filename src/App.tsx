import CardProduto from './CardProduto';
import { useState, useEffect } from 'react';
import './App.css';

interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      const resposta = await fetch('https://dummyjson.com/products/category/mens-shoes');
      const dados = await resposta.json();
      setProdutos(dados.products);
      setCarregando(false);
    }

    buscarProdutos();
  }, []);

  return (
    <div className="app">
      <header>
        <div className="cabecalho">
          <img className="nike" src="public/images.png" alt="simbolo da nike" />
          <img className="Search" src="public/searchbar.png" alt="barra de pesquisa" />
        </div>
        <div className="faixa-promocional">
          <span>Free shipping and refund</span>
          <span>Expulsion 24h </span>
          <span>-15% on the first purchase </span>
        </div>
      </header>
      <main>
        <div className="titulo-ordenar">
          <h1>Lifestyle Sneakers</h1>
          <img src="public/Sortby.png" alt="ordenar por" />
        </div>

        <div className="lista-produtos">
          {carregando ? (
            <p>Carregando...</p>
          ) : (
            produtos.map(produto => (
              <CardProduto
                key={produto.id}
                title={produto.title}
                price={produto.price}
                image={produto.thumbnail}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
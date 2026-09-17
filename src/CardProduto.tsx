import './CardProduto.css';

interface CardProdutoProps {
  title: string;
  price: number;
  image: string;
}

function CardProduto({ title, price, image }: CardProdutoProps) {
  return (
    <div className="card-produto">
      <div className="imagem-container">
        <img src={image} alt={title} />
      </div>
      <div className="info">
  <div>
    <p className="titulo">{title}</p>
    <p className="categoria">Men's shoes</p>
  </div>
  <p className="preco">${price}</p>
  </div>
    </div>
  );
}

export default CardProduto;
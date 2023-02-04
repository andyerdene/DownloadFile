import { products } from "../util/data";
import "../styles/home.css";
import "../styles/card.css";

export default function Home() {
  return (
    <div>
      <main>HOME</main>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <a href={`/product/${product.id}`}>
              <img src={product.url} alt="" className="cardImage" />
              <div>{product.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

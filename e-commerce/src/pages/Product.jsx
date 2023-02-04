import React from "react";
import { useParams } from "react-router-dom";
import "../styles/product.css";

export default function Product({ data }) {
  const { prodId } = useParams();
  console.log(prodId);
  const product = data.find((prod) => prod.id == prodId);
  console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>

      <img src={product.url} alt="" />
    </div>
  );
}

import React from "react";
import "./Product.css";

function Product({ id, title, image, price, raiting }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <p>⭐ </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;

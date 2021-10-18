import React, { useState } from "react";
import "./Product.css";
import { UseStateValue } from "./StateProvider";

function Product({ id, title, image, price, raiting }) {
  const [basket, dispatch] = UseStateValue();
  //console.log("El >>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        raiting: raiting,
      },
    });
  };
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
      <button onClick={addToBasket}>Agregar al carrito</button>
    </div>
  );
}

export default Product;

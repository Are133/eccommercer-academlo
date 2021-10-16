import React from "react";
import "./CheckoutProduct.css";
import { UseStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, raiting }) {
  const [{ basket }, dispatch] = UseStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <p>⭐ </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Sacar del carrito</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

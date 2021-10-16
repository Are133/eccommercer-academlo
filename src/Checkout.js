import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { UseStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://binfinity.ch/img/en/marketopen.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Tu carro de compras</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              raiting={item.raiting}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = UseStateValue();

  console.log(basket);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Pagarias (<Link to="/checkout">{basket?.length} Articulos</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Direccion de envio</h3>
          </div>
          <div className="payment__address">
            {user?.email}
            <p>POB C32, Huimanguillo, Tabasco</p>
            <p>Mexico</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Articulos añadidos</h3>
          </div>
          <div className="payment__items">
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

        <div className="payment__section">
          <div className="payment__title">
            <h3>Metodo de pago</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

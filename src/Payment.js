import React, { useEffect, useState } from "react";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import axios from "./axios";
import { useHistory } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = UseStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
          <div className="payment__details">
            <form onClick={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} articulos):
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gif">
                        <input type="checkbox" />
                        Este pedido contiene un regalo
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p>Procesando</p> : "Comprar haora"}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = UseStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
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

      <button onClick={(e) => history.push("/payment")}>Ir a pagar</button>
    </div>
  );
}

export default Subtotal;

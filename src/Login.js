import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://app.legops.com/image/logo-signio.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Iniciar sesion</h1>
        <form>
          <h5>Correo</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={singIn}
            className="login__singInButton"
          >
            Iniciar
          </button>
        </form>
        <p>
          Si no cuentas con una cuenta, registrate pulsando el siguiente boton
        </p>
        <button onClick={register} className="login__registerButton">
          Crear nueva cuenta
        </button>
      </div>
    </div>
  );
}

export default Login;

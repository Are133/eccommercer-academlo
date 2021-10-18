import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = UseStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://ecommerce-news.es/wp-content/uploads/2020/10/ecommerce-news.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOn">
              Hola {!user ? "Hola" : user.email}
            </span>
            <span className="header__optionLineTow">
              {user ? "Salir" : "Iniciar sesion"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Devoluciones</span>
          <span className="header__optionLineTwo"> & Pedidos</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

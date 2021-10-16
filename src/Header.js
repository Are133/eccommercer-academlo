import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://ecommerce-news.es/wp-content/uploads/2020/10/ecommerce-news.png"
        alt=""
      />

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOn">Hola Chay</span>
          <span className="header__optionLineTow">Inicia sesion</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Devoluciones</span>
          <span className="header__optionLineTwo"> & Pedidos</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingCart />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

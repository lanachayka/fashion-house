import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

export const Menu: React.FC = () => {
    return (
      <nav className={style.menu}>
        <NavLink className={style.link} to="/fashion-house/about" key="/about">
          About us
        </NavLink>
        <NavLink
          className={style.link}
          to="/fashion-house/catalog"
          key="/catalog"
        >
          Catalog
        </NavLink>
        <NavLink
          className={style.link}
          to="/fashion-house/collection"
          key="/collection"
        >
          Collection
        </NavLink>
        <NavLink
          className={style.link}
          to="/fashion-house/contacts"
          key="/contacts"
        >
          Contact us
        </NavLink>
      </nav>
    );
}
import React from "react";
import style from "./Menu.module.css";

export const Menu: React.FC = () => {
    return (
      <nav className={style.menu}>
        <a className={style.link}>About us</a>
        <a className={style.link}>Catalog</a>
        <a className={style.link}>Collection</a>
        <a className={style.link}>Contact us</a>
      </nav>
    );
}
import { Logo, LogoTypes } from "../Logo/Logo";
import style from "./StoreHeader.module.css";
import { NavLink } from "react-router-dom";

export const StoreHeader: React.FC = () => {
    return (
      <header className={style.header}>
        <Logo type={LogoTypes.white} className={style.logo} />
        <nav className={style.menu}>
          <NavLink
            className={style.link}
            to="/fashion-house/about"
            key="/about"
          >
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
      </header>
    );
}
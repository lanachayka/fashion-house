import { Title } from "../../components/Title/Title";
import style from "./CatalogPage.module.css";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import { Carousel } from "../../components/Carusel/Carousel";
import { catalogData } from "./catalogData";

export const CatalogPage = () => {
  return (
    <div>
      <Logo type={LogoTypes.color} className={style.logo} />
      <div className={style.header}>
        <p>CATALOG</p>
        <Title text="Designer Clothes for Every Taste." />
        <p>
          We create fashion clothes that are ready to wear. We love simple looks
          and share our vision with you.
        </p>
      </div>
      <div className={style.content}>
        <Carousel items={catalogData} />
      </div>
    </div>
  );
};

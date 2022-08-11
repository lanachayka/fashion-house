import style from "./InfoBlock.module.css";
import { Button, ButtonTypes } from "../../components/Button/Button";
import { Title } from "../Title/Title";
import { Link } from "react-router-dom";

export const InfoBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <p>DESIGNER CLOTHES</p>
      <Title text="Your New Everyday Style." />
      <p>
        Jolly House is your destination for designer and comfortable clothes for
        any occasion.
      </p>
      <div className={style.buttonBlock}>
        <Link to="/fashion-house/collection" key="collection">
          <Button styleType={ButtonTypes.dark} text="Shop Now +" />
        </Link>
        <Link to="/fashion-house/about" key="about">
          <Button styleType={ButtonTypes.light} text="About Us" />
        </Link>
      </div>
    </div>
  );
};

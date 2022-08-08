import style from "./InfoBlock.module.css";
import { Button, ButtonTypes } from "../../components/Button/Button";
import { Title } from "../Title/Title";

export const InfoBlock: React.FC = () => {
  return (
    <div className={style.infoContainer}>
      <p>DESIGNER CLOTHES</p>
      <Title text="Your New Everyday Style." />
      <p>
        Jolly House is your destination for designer and comfortable clothes for
        any occasion.
      </p>
      <div className={style.buttonBlock}>
        <Button type={ButtonTypes.dark} text="Shop Now +" />
        <Button type={ButtonTypes.light} text="About Us" />
      </div>
    </div>
  );
};

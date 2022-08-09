import { Link } from "react-router-dom";
import { Button, ButtonTypes } from "../Button/Button";
import { Title } from "../Title/Title";
import style from "./WhyChooseUsBlock.module.css";

export const WhyChooseUsBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div></div>
      <div className={style.content}>
        <p>WHY CHOOSE US</p>
        <Title text="Things You'll Love About Jolly House." />
        <p>We create each outfit for you with great love and care.</p>
        <h2 className={style.title}>
          <span className={style.line}>—</span>Jolly brand is
        </h2>
        <ul>
          <li>Capsule collections you can wear on any occasion;</li>
          <li>Only high quality and eco-friendly materials;</li>
          <li>A great variety of outfits for every taste and size.</li>
        </ul>
        <p>
          We know the main problem of all women – a lot of clothes in the
          wardrobe but nothing to wear. Therefore, we develop capsule
          collections where clothes go well with each other. You can mix them as
          well to create stunning new looks!
        </p>
        <Link to="/history">
          <Button text="Learn More +" type={ButtonTypes.dark} />
        </Link>
      </div>
    </div>
  );
};

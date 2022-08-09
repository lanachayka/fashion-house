import { Title } from "../../components/Title/Title";
import style from "./AboutUsBlock.module.css";
import aboutUs from "../../images/aboutUs/aboutUs.png";

export const AboutUsBlock = () => {
  return (
    <div className={style.container}>
      <p>ABOUT US</p>
      <Title text="Comfort and Quality Come First." />
      <p>
        Johanna Innsbruck and Linda Copperfield have always dreamed of
        comfortable women's clothing that would look appropriate in any
        circumstances.
      </p>
      <p>
        This is how the Jolly House brand appeared – it is a brand for women who
        like to feel confident, seductive, and stylish in any situation. We use
        only natural fabrics and pay great attention to details that make the
        difference.
      </p>
      <img src={aboutUs} alt="About us" className={style.photo}></img>
    </div>
  );
};

import style from "./AboutUsQuote.module.css";
import aboutUs from "../../images/aboutUsQuote.png";

export const AboutUsQuote: React.FC = () => {
    return (
      <div className={style.container}>
        <img className={style.photo} src={aboutUs} alt="Johanna Innsbruck"></img>
        <p className={style.quote}>
          "I have always had difficulties with buying clothes for every-day
          wear. Therefore, together with Linda, we decided to create our own
          brand."
        </p>
        <p>
          <span className={style.line}>—</span>Johanna Innsbruck
        </p>
      </div>
    );
}
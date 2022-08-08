import { Logo, LogoTypes } from "../../components/Logo/Logo";
import style from "./AboutPage.module.css";
import { AboutUsBlock } from "../../components/AboutUsBlock/AboutUsBlock";
import { AboutUsQuote } from "../../components/AboutUsQuote/AboutUsQuote";
import { WhyChooseUsBlock } from "../../components/WhyChooseUsBlock/WhyChooseUsBlock";

export const AboutPage = () => {
  return (
    <div>
      <Logo type={LogoTypes.color} className={style.logo} />
      <div className={style.content}>
        <AboutUsQuote />
        <AboutUsBlock />
      </div>
      <WhyChooseUsBlock />
    </div>
  );
};

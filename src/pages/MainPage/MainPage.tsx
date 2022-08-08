import { Button, ButtonTypes } from "../../components/Button/Button";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import style from "./MainPage.module.css";

export const MainPage: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <Logo type={LogoTypes.white} className={style.mainLogo} />
      <Button type={ButtonTypes.dark} text="Shop Now +" />
      <Button type={ButtonTypes.light} text="About Us" />
    </div>
  );
};

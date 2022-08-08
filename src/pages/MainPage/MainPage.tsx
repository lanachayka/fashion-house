import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import style from "./MainPage.module.css";

export const MainPage: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <Logo type={LogoTypes.white} className={style.mainLogo} />
      <div className={style.mainContent}>
        <Menu />
        <InfoBlock />
      </div>
    </div>
  );
};

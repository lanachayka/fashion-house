import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import style from "./MainPage.module.css";

export const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo type={LogoTypes.white} className={style.logo} />
      <div className={style.content}>
        <Menu />
        <InfoBlock />
      </div>
    </div>
  );
};

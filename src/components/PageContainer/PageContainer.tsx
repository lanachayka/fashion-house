import style from "./PageContainer.module.css";
import { Logo, LogoTypes } from "../../components/Logo/Logo";

type Props = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <Logo type={LogoTypes.color} className={style.logo} />
      <div>{children}</div>
    </div>
  );
};

import style from "./HistoryPage.module.css";
import { Title } from "../../components/Title/Title";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import { historyData } from "./historyData";
import { HistoryBlock } from "../../components/HistoryBlock/HistoryBlock";

export const HistoryPage = () => {
  return (
    <div className={style.container}>
      <Logo type={LogoTypes.color} className={style.logo} />
      <div className={style.header}>
        <p>HISTORY</p>
        <Title text="Moments That Matter for Us." />
        <p>
          A few words about how our brand of designer clothes was created and
          developed.
        </p>
      </div>
      <div className={style.content}>
        {historyData.map((item, index) => (
            <HistoryBlock historyItem={item} key={index} />
        ))}
      </div>
    </div>
  );
};

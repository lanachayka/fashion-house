import { HistoryInfoBlock } from "../../pages/HistoryPage/historyData";
import style from "./HistoryBlock.module.css";

type Props = {
    historyItem: HistoryInfoBlock;
}

export const HistoryBlock: React.FC<Props> = ({ historyItem }) => {
    return (
      <div className={style.container}>
        <div className={style.year}>
          <h1>{historyItem.year}</h1>
        </div>
        <h2 className={style.title}>{historyItem.title}</h2>
        <div className={style.line}></div>
        <p>{historyItem.text}</p>
      </div>
    );
};
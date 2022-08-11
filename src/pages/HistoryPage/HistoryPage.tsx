import style from "./HistoryPage.module.css";
import { historyData } from "./historyData";
import { HistoryBlock } from "../../components/HistoryBlock/HistoryBlock";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const HistoryPage = () => {
  return (
    <PageContainer>
      <PageHeader
        name="HISTORY"
        title="Moments That Matter for Us."
        text="A few words about how our brand of designer clothes was created and
          developed."
      />
      <div className={style.content}>
        {historyData.map((item, index) => (
          <HistoryBlock historyItem={item} key={index} />
        ))}
      </div>
    </PageContainer>
  );
};

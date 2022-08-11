import style from "./AboutPage.module.css";
import { AboutUsBlock } from "../../components/AboutUsBlock/AboutUsBlock";
import { AboutUsQuote } from "../../components/AboutUsQuote/AboutUsQuote";
import { WhyChooseUsBlock } from "../../components/WhyChooseUsBlock/WhyChooseUsBlock";
import { PageContainer } from "../../components/PageContainer/PageContainer";

export const AboutPage = () => {
  return (
    <PageContainer>
      <div className={style.content}>
        <AboutUsQuote />
        <AboutUsBlock />
      </div>
      <WhyChooseUsBlock />
    </PageContainer>
  );
};

import style from "./CatalogPage.module.css";
import { Carousel } from "../../components/Carousel/Carousel";
import { catalogData } from "./catalogData";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const CatalogPage = () => {
  return (
    <PageContainer>
      <PageHeader
        name="CATALOG"
        title="Designer Clothes for Every Taste."
        text="We create fashion clothes that are ready to wear. We love simple looks
          and share our vision with you."
      />
      <div className={style.content}>
        <Carousel items={catalogData} />
      </div>
    </PageContainer>
  );
};

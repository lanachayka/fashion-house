import React from "react";
import { CollectionBlock } from "../../components/CollectionBlock/CollectionBlock";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { collectionData } from "./collectionData";
import style from "./CollectionPage.module.css";

export const CollectionPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        name="COLLECTION"
        title="Select Your Perfect Look."
        text="Check out our new capsule collection and add items you like the most to the shopping cart!"
      />
      <div className={style.content}>
        {collectionData.map((item) => (
          <CollectionBlock item={item} key={item.id} />
        ))}
      </div>
    </PageContainer>
  );
};

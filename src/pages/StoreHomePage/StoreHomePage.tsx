import React from "react";
import {
  CollectionBlock,
  PhotoSizes,
} from "../../components/CollectionBlock/CollectionBlock";
import { StoreHeader } from "../../components/StoreHeader/StoreHeader";
import { collectionData } from "../CollectionPage/collectionData";
import style from "./StoreHomePage.module.css";
import { ButtonTypes } from "../../components/Button/Button";

export const StoreHomePage: React.FC = () => {
  return (
    <div>
      <StoreHeader />
      <div className={style.content}>
        <h2 className={style.title}>
          Store homepage ({collectionData.length})
        </h2>
        <h2 className={style.title}>Products ({collectionData.length})</h2>
        <div className={style.list}>
          {collectionData.map((item) => (
            <CollectionBlock
              item={item}
              key={item.id}
              buttonText="Buy"
              buttonType={ButtonTypes.color}
              photoSize={PhotoSizes.small}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

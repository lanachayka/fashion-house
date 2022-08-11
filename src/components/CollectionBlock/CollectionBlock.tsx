import React from "react";
import { CollectionItem } from "../../pages/CollectionPage/collectionData";
import { Button, ButtonTypes } from "../Button/Button";
import style from "./CollectionBlock.module.css";

export enum PhotoSizes {
  small = "photoSmall",
  big = "photoBig",
}

type Props = {
  item: CollectionItem;
  buttonType: ButtonTypes;
  buttonText: string;
  photoSize: PhotoSizes;
};

export const CollectionBlock: React.FC<Props> = ({ item, buttonType, buttonText, photoSize }) => {
  const imgUrl = require(`../../images/collection/${item.photo}`);
  return (
    <div className={style.container}>
      <img className={style[photoSize]} src={imgUrl} alt={item.name}></img>
      <h2 className={style.title}>{item.name}</h2>
      <h3 className={style.price}>
        <span className={style.digital}>{item.price.toFixed(2)}</span>
        {item.currency}
      </h3>
      <Button styleType={buttonType} text={buttonText} />
    </div>
  );
};

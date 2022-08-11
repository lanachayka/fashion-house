import React from "react";
import { CollectionItem } from "../../pages/CollectionPage/collectionData";
import { Button, ButtonTypes } from "../Button/Button";
import style from "./CollectionBlock.module.css";

type Props = {
  item: CollectionItem;
};

export const CollectionBlock: React.FC<Props> = ({ item }) => {
  const imgUrl = require(`../../images/collection/${item.photo}`);
  return (
    <div className={style.container}>
      <img className={style.photo} src={imgUrl} alt={item.name}></img>
      <h2 className={style.title}>{item.name}</h2>
      <h3 className={style.price}>
        <span className={style.digital}>{item.price.toFixed(2)}</span>
        {item.currency}
      </h3>
      <Button styleType={ButtonTypes.dark} text="Add to Cart +" />
    </div>
  );
};

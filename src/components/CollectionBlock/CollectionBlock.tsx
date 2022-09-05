import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { CollectionItem } from "../../pages/CollectionPage/collectionData";
import { Button, ButtonTypes } from "../Button/Button";
import { Price } from "../Price/Price";
import style from "./CollectionBlock.module.css";
import { findItemById } from "./helper";

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

export const CollectionBlock: React.FC<Props> = ({
  item,
  buttonType,
  buttonText,
  photoSize,
}) => {
  const { selectedItems, setSelectedItems } = useContext(AppContext);
  const onBuy = () => {
    setSelectedItems(findItemById(selectedItems, item));
  };
  const imgUrl = require(`../../images/collection/${item.photo}`);
  return (
    <div className={style.container}>
      <Link to={`/fashion-house/store/${item.id}`} key={"/store/:id"}>
        <img className={style[photoSize]} src={imgUrl} alt={item.name}></img>
      </Link>
      <h2 className={style.title}>{item.name}</h2>
      <Price currency={item.currency} price={item.price} cartMode={false} />
      <Button styleType={buttonType} text={buttonText} onClick={onBuy} />
    </div>
  );
};

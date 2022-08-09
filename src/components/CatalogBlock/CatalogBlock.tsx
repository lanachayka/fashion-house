import { CatalogItem } from "../../pages/CatalogPage/catalogData";
import style from "./CatalogBlock.module.css";

type Props = {
  item: CatalogItem;
};

export const CatalogBlock: React.FC<Props> = ({ item }) => {
  const imgUrl = require(`../../images/catalog/${item.img}`);
  return (
    <div className={style.container}>
      <img className={style.photo} src={imgUrl} alt={item.title}></img>
      <h2 className={style.title}>{item.title}</h2>
      <p>{item.text}</p>
    </div>
  );
};

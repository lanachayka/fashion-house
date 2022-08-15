import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, ButtonTypes } from "../../components/Button/Button";
import { StoreHeader } from "../../components/StoreHeader/StoreHeader";
import {
  collectionData,
  CollectionItem,
} from "../CollectionPage/collectionData";
import style from "./ProductPage.module.css";

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<CollectionItem>();
  const [imgUrl, setImgUrl] = useState<string>();
  useEffect(() => {
    const item = collectionData.filter((item) => item.id === Number(id));
    setProduct(item[0]);
    setImgUrl(require(`../../images/collection/${item[0].photo}`));
  }, [id]);
  return (
    <div>
      <StoreHeader />
      <Link to="/fashion-house/store" key="/store" className={style.link}>
        <p className={style.text}>Store homepage</p>
      </Link>
      {product && (
        <div className={style.content}>
          <img src={imgUrl} alt={product.name} className={style.photo}></img>
          <div>
            <p className={style.stock}>In stock</p>
            <h2 className={style.title}>{product.name}</h2>
            <p>Product code {id}</p>
            <h3 className={style.price}>
              <span className={style.digital}>{product.price.toFixed(2)}</span>
              {product.currency}
            </h3>
            <hr className={style.line}></hr>
            <div className={style.orderBlock}>
              <input
                type="number"
                min="1"
                max="5"
                defaultValue={1}
                className={style.input}
              />
              <Button styleType={ButtonTypes.color} text="Add to Cart" />
            </div>
            <p className={style.description}>Description</p>
            <p>{product.description}</p>
            <p>Available sizes: {product.sizes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

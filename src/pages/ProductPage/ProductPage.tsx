import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, ButtonTypes } from "../../components/Button/Button";
import { NumberInput } from "../../components/NumberInput/NumberInput";
import { Price } from "../../components/Price/Price";
import { StoreHeader } from "../../components/StoreHeader/StoreHeader";
import { AppContext } from "../../context/AppContext";
import {
  collectionData,
  CollectionItem,
} from "../CollectionPage/collectionData";
import style from "./ProductPage.module.css";

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<CollectionItem>();
  const [imgUrl, setImgUrl] = useState<string>();
  const [productCount, setProductCount] = useState<number>(1);
  useEffect(() => {
    const item = collectionData.filter((item) => item.id === Number(id));
    setProduct(item[0]);
    setImgUrl(require(`../../images/collection/${item[0].photo}`));
  }, [id]);
  const { selectedItems, setSelectedItems } =
    useContext(AppContext);
  const onBuy = () => {
    if (product) {
      const copyItems = [...selectedItems];
      const alreadyInCartIndex = copyItems.findIndex(
        (i) => i.item.id === product.id
      );
      if (alreadyInCartIndex >= 0) {
        copyItems[alreadyInCartIndex].count += productCount;
      } else {
        copyItems.push({
          count: productCount,
          item: product,
        });
      }
      setSelectedItems(copyItems);
    }
  };
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
            <Price currency={product.currency} price={product.price} cartMode={false} />
            <hr className={style.line}></hr>
            <div className={style.orderBlock}>
              <NumberInput
                value={productCount}
                onChange={(e) => setProductCount(+e.target.value)}
              />
              <Button
                styleType={ButtonTypes.color}
                text="Add to Cart"
                onClick={onBuy}
              />
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

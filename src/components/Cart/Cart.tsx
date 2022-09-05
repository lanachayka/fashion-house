import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Form, FormTypes } from "../Form/Form";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import deleteIcon from "../../images/icons/close.svg";
import { NumberInput } from "../NumberInput/NumberInput";
import { Price } from "../Price/Price";

type Props = {
  hideModal: () => void;
};

export const Cart: React.FC<Props> = ({ hideModal }) => {
  const { setCount, selectedItems, setSelectedItems, total } =
    useContext(AppContext);
  const onSubmit = () => {
    hideModal();
    setCount(0);
    setSelectedItems([]);
  };
  const deleteProduct = (id: number) => {
    const selectedItemsCopy = selectedItems.filter(
      (item) => item.item.id !== id
    );
    setSelectedItems(selectedItemsCopy);
  };
  const changeProductCount = (newCount: number, id: number) => {
    const selectedItemsCopy = [...selectedItems];
    const index = selectedItemsCopy.findIndex(item => item.item.id === id);
    selectedItemsCopy[index].count = newCount;
    setSelectedItems(selectedItemsCopy);
  };
  return (
    <div>
      <p>Products</p>
      {selectedItems && selectedItems.map((selectedItem) => (
        <div key={selectedItem.item.id} className={style.products}>
          <img
            src={require(`../../images/collection/${selectedItem.item.photo}`)}
            alt={selectedItem.item.name}
            className={style.photo}
          ></img>
          <Link
            to={`/fashion-house/store/${selectedItem.item.id}`}
            key={"/store/:id"}
            className={style.link}
            target="_blank"
          >
            <h5>{selectedItem.item.name.slice(0, 10)}...</h5>
          </Link>
          <NumberInput
            defaultValue={selectedItem.count}
            onChange={(e) =>
              changeProductCount(+e.target.value, selectedItem.item.id)
            }
          />
          <Price
            price={selectedItem.item.price}
            currency={selectedItem.item.currency}
            cartMode={true}
          />
          <img
            src={deleteIcon}
            alt="delete icon"
            className={style.icon}
            onClick={() => deleteProduct(selectedItem.item.id)}
          ></img>
        </div>
      ))}
      <div className={style.total}>
        Total: <Price price={total} cartMode={true} />
      </div>
      <p>Place an order</p>
      <Form formType={FormTypes.order} onSubmit={onSubmit} />
    </div>
  );
};

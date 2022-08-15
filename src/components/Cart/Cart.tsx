import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Form, FormTypes } from "../Form/Form";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import deleteIcon from "../../images/icons/close.svg";

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
    let newCount = 0;
    selectedItemsCopy.forEach(item => newCount += item.count);
    setCount(newCount);
  };
  const changeProductCount = (newCount: number, id: number) => {
    const selectedItemsCopy = [...selectedItems];
    const index = selectedItemsCopy.findIndex(item => item.item.id === id);
    selectedItemsCopy[index].count = newCount;
    setSelectedItems(selectedItemsCopy);
    let newSumCount = 0;
    selectedItemsCopy.forEach((item) => (newSumCount += item.count));
    setCount(newSumCount);
  };
  return (
    <div>
      <p>Products</p>
      {selectedItems.map((selectedItem) => (
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
          <input
            type="number"
            min="1"
            max="5"
            className={style.input}
            defaultValue={selectedItem.count}
            onChange={(e) => changeProductCount(+e.target.value, selectedItem.item.id)}
          />
          <p>
            <span className={style.digital}>
              {selectedItem.item.price.toFixed(2)}
            </span>
            {selectedItem.item.currency}
          </p>
          <img
            src={deleteIcon}
            alt="delete icon"
            className={style.icon}
            onClick={() => deleteProduct(selectedItem.item.id)}
          ></img>
        </div>
      ))}
      <p className={style.total}>
        Total: <span className={style.digital}>{total.toFixed(2)}</span>USD
      </p>
      <p>Place an order</p>
      <Form formType={FormTypes.order} onSubmit={onSubmit} />
    </div>
  );
};

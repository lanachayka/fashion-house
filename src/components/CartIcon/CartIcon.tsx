import React, { useState } from "react";
import style from "./CartIcon.module.css";
import icon from "../../images/icons/shopping_bag.svg";
import { Modal } from "../Modal/Modal";

type Props = {
  count: number;
};

export const CartIcon: React.FC<Props> = ({ count }) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  return (
    <div className={style.container}>
      <Modal isShowing={toggleModal} hide={() => setToggleModal(false)}>
        <div>cart</div>
      </Modal>
      <img
        src={icon}
        alt="shopping bag icon"
        onClick={() => setToggleModal(true)}
      ></img>
      {count > 0 && <div className={style.count}>{count}</div>}
    </div>
  );
};

import React from "react";
import style from "./Price.module.css";

type Props = {
  price: number;
  currency?: string;
  cartMode: boolean;
};

export const Price: React.FC<Props> = ({ price, currency, cartMode }) => {
  return (
    <h3 className={cartMode ? style.cartPrice : style.price}>
      <span className={cartMode ? style.cartDigital : style.digital}>
        {price && price.toFixed(2)}
      </span>
      {currency ? currency : "USD"}
    </h3>
  );
};

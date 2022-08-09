import React from "react";
import style from "./Title.module.css";

type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
    return (
      <div className={style.container}>
        <h1 className={style.title}>
          <span className={style.line}>—</span>
          {text}
        </h1>
      </div>
    );
};

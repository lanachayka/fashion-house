import React from "react";
import style from "./Button.module.css";

export enum ButtonTypes {
    dark = "dark",
    light = "light"
}

type Props = {
  type: ButtonTypes;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({type, text, onClick}) => {
    return (
        <button onClick={onClick} className={style[type]}>{text}</button>
    )
}
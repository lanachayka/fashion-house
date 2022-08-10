import React from "react";
import style from "./Button.module.css";

export enum ButtonTypes {
  dark = "dark",
  light = "light",
}

type Props = {
  styleType: ButtonTypes;
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({ type, text, onClick, styleType }) => {
  return (
    <button onClick={onClick} className={style[styleType]} type={type}>
      {text}
    </button>
  );
};

import style from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";
import close from "../../images/icons/close.svg";

type Props = {
  children: React.ReactNode | string;
  isShowing: boolean;
  hide: () => void;
};

export const Modal: React.FC<Props> = ({ children, isShowing, hide }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={style.container}>
            <div className={style.modal}>
              <img
                className={style.icon}
                src={close}
                alt="close icon"
                onClick={hide}
              ></img>
              <div>{children}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

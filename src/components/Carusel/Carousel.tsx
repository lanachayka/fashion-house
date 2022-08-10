import { useState } from "react";
import { CatalogItem } from "../../pages/CatalogPage/catalogData";
import style from "./Carousel.module.css";
import back from "../../images/icons/arrow_back.svg";
import forward from "../../images/icons/arrow_forward.svg";
import { CatalogBlock } from "../CatalogBlock/CatalogBlock";

type Props = {
    items: CatalogItem[];
}

export const Carousel: React.FC<Props> = ({ items }) => {
    const [position, setPosition] = useState<number>(0);
    const backHandler = () => {
        if (position === items.length-1) {
            setPosition(0);
        } else {
            setPosition((prev) => prev + 1);
        }
    }
    const forwardHandler = () => {
        if (position === 0) {
          setPosition(items.length-1);
        } else {
          setPosition((prev) => prev - 1);
        }
    }
    return (
      <div className={style.container}>
        <img src={back} onClick={backHandler} alt="arrow back icon"></img>
        <CatalogBlock item={items[position]} />
        <img src={forward} onClick={forwardHandler} alt="arrow forward icon"></img>
      </div>
    );
}
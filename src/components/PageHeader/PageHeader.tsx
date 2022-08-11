import style from "./PageHeader.module.css";
import { Title } from "../Title/Title";
type Props = {
  name: string;
  title: string;
  text: string;
};

export const PageHeader: React.FC<Props> = ({ name, title, text }) => {
  return (
    <div className={style.header}>
      <p>{name}</p>
      <Title text={title} />
      <p>{text}</p>
    </div>
  );
};

import style from "./Form.module.css";
import { Button, ButtonTypes } from "../Button/Button";

export enum FormTypes {
  contact = "contact",
  order = "order",
}

type Props = {
  onSubmit: () => void;
  formType: FormTypes;
};

export const Form: React.FC<Props> = ({ onSubmit, formType }) => {
  return (
    <form className={style.container} onSubmit={onSubmit}>
      <input className={style.input} placeholder="Your name*" required />
      <input
        className={style.input}
        placeholder="Phone number*"
        required
        type="phone"
      />
      <input
        className={style.input}
        placeholder="Email*"
        required
        type="email"
      />
      <textarea
        className={style.input}
        placeholder={
          formType === FormTypes.contact ? "Your message" : "Your comment"
        }
      />
      <Button
        styleType={
          formType === FormTypes.contact ? ButtonTypes.dark : ButtonTypes.color
        }
        text={formType === FormTypes.contact ? "Request a quote +" : "Order"}
        type="submit"
      />
    </form>
  );
};

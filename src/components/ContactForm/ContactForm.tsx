import { Title } from "../Title/Title";
import style from "./ContactForm.module.css";
import { Button, ButtonTypes } from "../Button/Button";

type Props = {
  hideModal: () => void;
};

export const ContactForm: React.FC<Props> = ({ hideModal }) => {
  return (
    <div className={style.container}>
      <p>CONTACTS</p>
      <Title text="Ask us anything." />
      <form className={style.container}>
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
        <textarea className={style.input} placeholder="Your message" />
        <Button
          styleType={ButtonTypes.dark}
          text="Request a quote +"
          onClick={() => hideModal()}
          type="submit"
        />
      </form>
    </div>
  );
};

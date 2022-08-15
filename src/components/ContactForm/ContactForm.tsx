import { Title } from "../Title/Title";
import style from "./ContactForm.module.css";
import { Form, FormTypes } from "../Form/Form";

type Props = {
  hideModal: () => void;
};

export const ContactForm: React.FC<Props> = ({ hideModal }) => {
  return (
    <div className={style.container}>
      <p>CONTACTS</p>
      <Title text="Ask us anything." />
      <Form formType={FormTypes.contact} onSubmit={hideModal} />
    </div>
  );
};

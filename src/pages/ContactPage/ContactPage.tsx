import style from "./ContactPage.module.css";
import mail from "../../images/icons/mail.svg";
import { Button, ButtonTypes } from "../../components/Button/Button";
import { Logo, LogoTypes } from "../../components/Logo/Logo";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export const ContactPage: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className={style.container}>
      <Modal isShowing={toggleModal} hide={() => setToggleModal(false)}>
        <ContactForm hideModal={() => setToggleModal(false)} />
      </Modal>
      <Logo type={LogoTypes.color} className={style.logo} />
      <div className={style.content}>
        <img src={mail} alt="mail icon"></img>
        <h1 className={style.title}>Want to Collaborate With Us?</h1>
        <div className={style.line}></div>
        <p>Please contact us to discuss the details with our manager.</p>
        <Button
          text="Contact Us +"
          styleType={ButtonTypes.dark}
          onClick={() => setToggleModal(true)}
        />
      </div>
    </div>
  );
};

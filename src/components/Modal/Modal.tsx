import { ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

interface IModalProps {
  children: ReactNode;
}

function Modal({ children }: IModalProps): ReactElement {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;

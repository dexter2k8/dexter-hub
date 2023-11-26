import Button from "../Button";
import Styles from "./styles";
import { useCallback, useEffect, useRef } from "react";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ open, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // quando clicar na div container, ou seja, fora do modal, este fechará
  // useCallback memoriza a função para não renderizá-la a cada clique
  const backdropClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === modalRef.current) onClose();
    },
    [onClose]
  );

  //captura os clicks e chama a função backdropClick
  useEffect(() => window.addEventListener("click", backdropClick), [backdropClick]);

  return (
    // armazena a div container no modalRef
    <Styles.Container open={open} ref={modalRef}>
      <Styles.ModalBody>
        <Styles.Header>
          <h2>{title}</h2>
          <Button variant="small" onClick={onClose}>
            x
          </Button>
        </Styles.Header>
        {children}
      </Styles.ModalBody>
    </Styles.Container>
  );
};

export default Modal;

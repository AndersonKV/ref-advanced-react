import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);
  //cria uma função que devolve quais metodos deve ser exporto ao
  //component pai

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      modal aberto
      <button onClick={handleCloseModal}>fechar o modal</button>
    </div>
  );
};

export default forwardRef(Modal);

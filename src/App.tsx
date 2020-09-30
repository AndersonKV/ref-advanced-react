import React, { useRef, useCallback, FormEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { userInfo } from "os";

import Input from "./components/input";
import Modal, { ModalHandles } from "./components/Modal";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTerms = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log(nameInputRef);
    console.log(acceptTerms.current?.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTerms.current.value = !acceptTerms.current?.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input name="name" label="nome completo" ref={nameInputRef} />
        <button type="button" onClick={handleAcceptTerms}>
          Aceita termos
        </button>
        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>abrir modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;

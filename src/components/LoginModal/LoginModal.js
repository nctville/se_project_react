import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ onClose, isOpen, onSubmit, handleRegisterModal }) => {
  // State variables

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       setEmail("");
  //       setPassword("");
  //     }
  //   }, [isOpen]);

  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="modal__container"
      title="Login"
      buttonText="Login"
    >
      <div className="modal__form-field">
        <label className="modal__label">
          Email
          <input
            className="modal__input modal__input_type_email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            placeholder="Email"
            required
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Password
          <input
            className="modal__input modal__input_type_password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            placeholder="Password"
            required
          />
        </label>
      </div>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleRegisterModal}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;

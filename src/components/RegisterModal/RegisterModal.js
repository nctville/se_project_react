import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ onClose, isOpen, onSubmit, handleLoginModal }) => {
  // State variables
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar, email, password});
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //       setAvatar("");
  //     }
  //   }, [isOpen]);

  return (
    <ModalWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      className="modal__container"
      title="Register"
      buttonText="Next"
      name="Register"
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
            minLength="1"
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
            minLength="8"
            placeholder="Password"
            required
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Name
          <input
            className="modal__input modal__input_type_name"
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            minLength="1"
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Avatar URL
          <input
            className="modal__input modal__input_type_url"
            type="url"
            value={avatar}
            onChange={handleAvatarChange}
            name="avatar"
            placeholder="Avatar URL"
            required
          />
        </label>
      </div>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleLoginModal}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;

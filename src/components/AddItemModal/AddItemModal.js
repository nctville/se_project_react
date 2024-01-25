import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({handleCloseModal, onAddItem, isOpen}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [url, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [temp, setTemp] = useState("");
  const handleTempChange = (e) => {
    console.log(e.target.value);
    setTemp(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, url, temp });
  }

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="modal__container"
      title="New garment"
      buttonText="Add garment"
    >
      <div className="modal__form-field">
        <label className="modal__label">
          Name
          <input
            className="modal__input modal__input_type_name"
            value={name}
            onChange={handleNameChange}
            type="text"
            name="name"
            minLength="1"
            maxLength="40"
            placeholder="Name"
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Image
          <input
            className="modal__input modal__input_type_url"
            value={url}
            onChange={handleUrlChange}
            type="url"
            name="link"
            minLength="1"
            maxLength="40"
            placeholder="Image URL"
          />
        </label>
      </div>
      <p className="modal__select-title">Select the weather type:</p>
      <div className="modal__select-buttons">
        <div>
          <label>
            <input
              className="modal__button"
              value={temp}
              onChange={handleTempChange}
              name="weatherType"
              type="radio"
              id="hot"
            />
            Hot
          </label>
        </div>
        <div>
          <label>
            <input
              className="modal__button"
              value={temp}
              onChange={handleTempChange}
              name="weatherType"
              type="radio"
              id="warm"
            />
            Warm
          </label>
        </div>
        <div>
          <label>
            <input
              className="modal__button"
              value={temp}

              onChange={handleTempChange}
              name="weatherType"
              type="radio"
              id="cold"
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
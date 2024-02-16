import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({handleCloseModal, handleAddItemSubmit, isOpen}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setTemp] = useState("");
  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItemSubmit({ name, imageUrl, weather});

  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setTemp("");
     
    }
  }, [isOpen]);

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
            placeholder="Name"
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Image
          <input
            className="modal__input modal__input_type_url"
            value={imageUrl}
            onChange={handleUrlChange}
            type="url"
            name="link"
            minLength="1"
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
              value={weather}
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
              value={weather}
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
              value={weather}

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

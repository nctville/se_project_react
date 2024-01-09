import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Save",
  title = "",
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__heading">{title = 'Add garment'}</h3>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText= 'Add garment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

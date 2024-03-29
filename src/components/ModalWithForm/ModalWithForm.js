import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Save",
  title = "",
  onClose,
  name,
  isOpen,
  onSubmit
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__heading">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;



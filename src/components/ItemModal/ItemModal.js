import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content-preview">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}

        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__caption">
          <div>{selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
          <button
          className="modal__delete-button"
          type="button"
          onClick={() => {
            onCardDelete(selectedCard);
          }}
        >
          Delete item
        </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

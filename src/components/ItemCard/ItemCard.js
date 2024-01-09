import "./ItemCard.css";

const ItemCard = ({ x, onSelectCard }) => {
  return (
    <div className="card__container">
      <div>
        <img
          src={x.link}
          className="card_image"
          onClick={() => onSelectCard(x)}
          alt="clothing"
        />
      </div>
      <div className="card_name">{x.name}</div>
    </div>
  );
};

export default ItemCard;

import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__container">
      <div>
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt={item.clothing}
        />
      </div>
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;

import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";


const ClothesSection = ({clothingItems, handleCreateModal, onSelectCard }) => {
    return (
      <div className="profile__clothes-section">
        <div className="profile__clothes-section-add" type="text">
          <p className="profile__clothes-section-title">Your items</p>
          <button className="profile__clothes-section-button" onClick={handleCreateModal} type="text" >
            
            + Add New
          </button>
        </div>
        <div className="profile__clothes-section-items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
            />
          );
        })}
      </div>
      </div>
    );
  };
  
  export default ClothesSection;
  
import ItemCard from "../ItemCard/ItemCard";


const ClothesSection = ({clothingItems, handleCreateModal, onSelectCard }) => {
    return (
      <div className="clothes__section">
        <div className="clothes__section-add" type="text">
          <p className="clothes__section-title">Your items</p>
          <button className="clothes__section-button" onClick={handleCreateModal} type="text" >
            
            + Add New
          </button>
        </div>
        <div className="clothes__section-items">
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
  
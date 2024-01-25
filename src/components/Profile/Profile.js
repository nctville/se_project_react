import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothesSection">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
        />
      </div>
    </div>
  );
};

export default Profile;

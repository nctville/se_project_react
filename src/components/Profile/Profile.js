import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, handleCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      
        <SideBar />
      
      
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          handleCreateModal={handleCreateModal}
        />
      
    </div>
  );
};

export default Profile;

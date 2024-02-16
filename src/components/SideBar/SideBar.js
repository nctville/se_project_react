import avatar from "../../images/wtwr-avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-info">
        <img src={avatar} className="profile__sidebar-image" alt="sidebar-avatar" />
        <div>
          <p className="profile__sidebar-name">NCT</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

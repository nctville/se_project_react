import avatar from "../../images/wtwr-avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <img src={avatar} className="sidebar__image" alt="sidebar-avatar" />
        <div>
          <p className="sidebar__name">NCT</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

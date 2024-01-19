import "./Header.css";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import logo from '../../images/wtwr-logo.svg'
import avatar from '../../images/wtwr-avatar.svg'

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header__location">{`${currentDate}, ${city}`}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch/>
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            +Add New Clothes
          </button>
        </div>
        <div className="header__name">NCT</div>
        <div>
          <img
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

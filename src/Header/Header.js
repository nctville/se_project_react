import "./Header.css";

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  })

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/wtwr-logo.svg").default} alt="logo" />
        </div>
        <div className="header__location">{`${currentDate}, ${city}`}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            +Add New Clothes
          </button>
        </div>
        <div>NCT</div>
        <div>
          <img
            src={require("../images/wtwr-avatar.svg").default}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require('../images/wtwr-logo.svg').default} alt="logo" />
        </div>
        
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img src={require('../images/wtwr-avatar.svg').default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header
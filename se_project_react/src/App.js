import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <header className="header">
  <div className ="header__logo">
    <div>
      <img src="/images/wtwr-logo.svg" alt = 'logo'/>
    </div>
    <div>Date</div>
  </div>
  <div className = "header__avatar-logo">
      <div>
        <button type ="text">Add New Clothes</button>
      </div>
      <div>Name</div>
      <div>
        <img src = "/images/wtwr-avatar.svg" alt = "avatar" />
      </div>
  </div>
 </header>
 
  );
}

export default App;

import logo from '../logo.svg';
import '../App.css';


function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <p>
        MY REACT APP
      </p>
    </header>
  );
}

export default Header;

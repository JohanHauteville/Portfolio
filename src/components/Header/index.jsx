import "./styles.scss";
import backgroundTop from "../../assets/img/wave-top-flat.png";
import Menu from "../Menu";
import logo from "../../assets/img/Logo-white.png";
import MenuMobile from "../MenuMobile";

function Header() {
  return (
    <header>
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <Menu />
      </div>
      <div className="header__menu--mobile">
        <MenuMobile />
      </div>

      <div className={"background-top"}>
        <img src={backgroundTop} alt={"Background-Top"} />
      </div>
    </header>
  );
}

export default Header;

import "./styles.scss";
import backgroundTop from "../../assets/img/wave-top-flat.png";
import Menu from "../Menu";
import logo from "../../assets/img/Logo-white.png";

function Header() {
  return (
    <header>
      <img className="header-logo" src={logo} alt="logo" />
      <Menu />
      <div className={"background-top"}>
        <img src={backgroundTop} alt={"Background-Top"} />
      </div>
    </header>
  );
}

export default Header;

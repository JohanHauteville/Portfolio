import './styles.scss'
import backgroundTop from "../../assets/img/wave-top-flat.png";
import Menu from "../Menu";



function Header() {
    return <header>
        <Menu/>
        <div className={"background-top"}>

            <img src={backgroundTop} alt={"Background-Top"}/>

        </div>
    </header>
}

export default Header;
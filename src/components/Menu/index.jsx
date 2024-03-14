import './styles.scss'
import {Link} from "react-router-dom";
//import {Link} from "@mui/material";


function Menu(){
    return <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'#'}>Projects</Link></li>
            <li><Link to={'#'}>About</Link></li>
        </ul>
    </nav>
}

export default Menu;
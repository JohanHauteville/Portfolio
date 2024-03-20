import './styles.scss'
import { NavLink, useLocation} from "react-router-dom";
//import {Link} from "@mui/material";


function Menu(){
    const location = useLocation();
    console.log(location.pathname)
    return <nav>
        <ul>
            <li>
                <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
}

export default Menu;
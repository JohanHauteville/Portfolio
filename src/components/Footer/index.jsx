import backgroundBottom from '../../assets/img/wave-bottom.png'
import './styles.scss'
import { GitHub,LinkedIn} from "@mui/icons-material";
import { SOCIAL_LINK } from "../../utils/constants";

function Footer(){
    return(
        <footer>
            <div className={"footer-links"}>
                <div className={"footer-link__social"}>
                    <a href={SOCIAL_LINK.github} target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{ color: "#fff", fontSize: "40px" }}/>
                    </a>
                    <a href={SOCIAL_LINK.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn sx={{ color: "#fff", fontSize: "40px" }}/>
                    </a>

                </div>
            </div>
            <p>
                ©2024 All Rights Reserved. Made by Johan Hauteville.
            </p>
            <div className={"background-bottom"}>
                <img  src={backgroundBottom} alt={"background bottom"}/>
            </div>

        </footer>

    )
}

export default Footer;
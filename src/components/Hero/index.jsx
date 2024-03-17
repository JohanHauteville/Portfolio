import './styles.scss'
import {Button} from "@mui/material";
import {Face6, Folder, ExpandMoreRounded} from "@mui/icons-material";
import profilePicture from "../../assets/img/profile.jpg";
import availablePicture from "../../assets/img/available.svg";

function Hero() {
    return <section className="hero">
        <div className={"hero__profile"}>
            <div>
                <h1>
                    <span className={"job-intro"}>Hi, I'm Johan Hauteville <span
                        className={"job-shaking-hand"}>👋🏼</span></span> <br/>
                    <span className={"job-name"}>Front</span>end<br/>
                    Developper
                </h1>
                <p>
                    Je suis un développeur Frontend basé à Montpellier, spécialisé dans la technologie <span
                    className={"highlight"}>React</span>.
                </p>
                <div className={"hero__buttons"}>
                    <Button href={"#projects"} color="kaki" variant="outlined" startIcon={<Folder/>}><strong>See
                        Projects</strong></Button>
                    <Button href={"#about-me"} color="kaki" variant="outlined" startIcon={<Face6/>}><strong>About
                        me</strong></Button>
                </div>
            </div>
            <div className={"profile-container"}>
                <img className={"profile-picture"} src={profilePicture} alt={"profile"}/>
                <img className={"profile-available"} src={availablePicture} alt={"available"}/>
            </div>
        </div>
        <div className={"hero__next-button"}>
            <ExpandMoreRounded color={"kaki"} classes={{ root: "expand-icon"}} />
        </div>
    </section>
}

export default Hero;
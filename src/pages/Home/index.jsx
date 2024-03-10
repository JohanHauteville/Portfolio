import './styles.scss'
import  data  from '../../utils/data.json'
import backgroundTop from '../../assets/img/wave-kaki-flat.svg'
import profilePicture from '../../assets/img/profile.jpg'
//import profilePicture from '../../assets/img/profile-pic.png'
import availablePicture from '../../assets/img/available.svg'
import {Button} from "@mui/material";
import { Folder, Face6 } from "@mui/icons-material";



function Home() {

    const paragraphs = data.story.split('\n');

    return (
        <div className="Home">
            <img className={"background-top"} src={backgroundTop} alt={"Background-Top"}/>
            <header className="Home-header">
                <div>
                    <h1>
                        <span className={"job-intro"}>Hi, I'm Johan Hauteville 👋🏼</span> <br/>
                        <span className={"job-name"}>Front</span>end<br/>
                        Developper
                    </h1>
                    <p>
                        Je suis un développeur Frontend basé à Montpellier, spécialisé dans la technologie <span
                        className={"highlight"}>React</span>.
                    </p>
                    <div className={"Home-header__buttons"}>
                        <Button color="kaki" variant="outlined" startIcon={<Folder />}><strong>See Projects</strong></Button>
                        <Button color="kaki" variant="outlined" startIcon={<Face6 />} ><strong>About me</strong></Button>
                    </div>
                </div>
                <div className={"profile-container"}>
                    <img className={"profile-picture"} src={profilePicture} alt={"profile"}/>
                    <img className={"profile-available"} src={availablePicture} alt={"available"}/>
                </div>

            </header>
            <section id={"about-me"} className="Home-about">
                <p>
                    {paragraphs.map((paragraph, index) => {
                        return <span key={index + "com"}>{paragraph}<br/><br/></span>
                    })}
                </p>
            </section>
        </div>
    );
}

export default Home;

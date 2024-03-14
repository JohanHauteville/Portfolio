import './styles.scss'
import backgroundTop from '../../assets/img/wave-top-flat.png'
import Experiences from "../../components/Experiences";
import Story from "../../components/Story";
import Header from "../../components/Header";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import UpButton from "../../components/UpButton";
import Menu from "../../components/Menu";




function Home() {
    return (
        <div className="Home" id={"Home"}>
            <div className={"background-top"}>
                <img src={backgroundTop} alt={"Background-Top"}/>
            </div>
            <Menu />
            <Header/>
            <UpButton />
            <Skills />
            <Projects />
            <Story />
            <Experiences />
        </div>
    );
}

export default Home;

import './styles.scss'
import backgroundTop from '../../assets/img/wave-kaki-flat.svg'
import Experiences from "../../components/Experiences";
import Story from "../../components/Story";
import Header from "../../components/Header";
import Skills from "../../components/Skills"



function Home() {
    return (
        <div className="Home">
            <img className={"background-top"} src={backgroundTop} alt={"Background-Top"}/>
            <Header />
            <Skills />
            <Story />
            <Experiences />
        </div>
    );
}

export default Home;

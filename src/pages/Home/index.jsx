import './styles.scss'

import Experiences from "../../components/Experiences";
import Story from "../../components/Story";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import UpButton from "../../components/UpButton";




function Home() {
    return (
        <div className="Home" id={"Home"}>
            <Hero/>
            <UpButton />
            <Skills />
            <Projects />
            <Story />
            <Experiences short={true} />
        </div>
    );
}

export default Home;

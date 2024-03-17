import './styles.scss'

import Experiences from "../../components/Experiences";
import Story from "../../components/Story";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import UpButton from "../../components/UpButton";
import Header from "../../components/Header";




function Home() {
    return (
        <div className="Home" id={"Home"}>
            <Header />
            {/*<Menu />*/}
            <Hero/>
            <UpButton />
            <Skills />
            <Projects />
            <Story />
            <Experiences />
        </div>
    );
}

export default Home;

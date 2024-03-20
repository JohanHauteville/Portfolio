import './styles.scss'
import Story from "../../components/Story";
import Experiences from "../../components/Experiences";
import UpButton from "../../components/UpButton";



function About(){
    return <main className={"about-page"} >
        <Story />
        <Experiences />
        <UpButton page={true}/>
    </main>
}

export default About;
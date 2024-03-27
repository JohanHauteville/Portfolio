import "./styles.scss";

import Experiences from "../../components/Experiences";
import Story from "../../components/Story";
import Hero from "../../components/Hero";
import SkillsBar from "../../components/SkillsBar";
import Projects from "../../components/Projects";
import UpButton from "../../components/UpButton";

function Home() {
  return (
    <div className="Home" id={"Home"}>
      <Hero />
      <UpButton />
      <SkillsBar />
      <Projects short={true} />
      <Story />
      <Experiences short={true} />
    </div>
  );
}

export default Home;

import "./styles.scss";
import Story from "../../components/Story";
import Experiences from "../../components/Experiences";
import UpButton from "../../components/UpButton";
import picture from "../../assets/img/about-me.svg";
import { Container } from "@mui/material";

function About() {
  return (
    <main className={"about-page"}>
      <img className="about-picture" src={picture} alt="about-me" />
      <Container>
        <Story />
        <Experiences />
        <UpButton page={true} />
      </Container>
    </main>
  );
}

export default About;

import { Container } from "@mui/material";
import "./styles.scss";
import data from "../../utils/data.json";
import picture from "../../assets/img/Skills.svg";

function Skills() {
  return (
    <main className="skills-page">
      <img className="skills__picture" src={picture} alt="skills" />
      {/* <h2>Compétences</h2>
      <p>
        La veille technologique me permet de continuer à me former
        continuellement aux nouvelles technologies et de consolider celles déjà
        acquises.
      </p> */}
      <Container>
        <h2>Compétences techniques</h2>
        <p>
          La veille technologique me permet de continuer à me former
          continuellement aux nouvelles technologies et de consolider celles
          déjà acquises.
        </p>
        <section className="skills">
          {data.hardSkills &&
            data.hardSkills.map((hardSkill) => {
              return (
                <article
                  key={"skills-" + hardSkill.title}
                  className="skills__sections"
                >
                  <h3>{hardSkill.title.toUpperCase()}</h3>
                  <br />
                  {hardSkill.techno &&
                    hardSkill.techno.map((technoId) => {
                      const technoFounded = data.technologies.find(
                        (tech) => tech.id === technoId
                      );
                      return (
                        <div
                          key={
                            "techno-" +
                            hardSkill.title +
                            "-" +
                            technoFounded.name
                          }
                        >
                          <img
                            src={technoFounded.picture}
                            alt={technoFounded.name}
                            className="skills__sections--picture"
                          />
                          <h4>{technoFounded.name}</h4>
                        </div>
                      );
                    })}
                </article>
              );
            })}
        </section>
        <h2>SoftSkills</h2>
        <p>
          C'est au cours de mes différentes expériences que j'ai pu acquérir les
          qualités nécessaires pour mener à bien un projet en équipe et
          respecter les délais demandés.
        </p>
      </Container>
    </main>
  );
}

export default Skills;

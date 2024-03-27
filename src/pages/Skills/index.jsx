import { Container } from "@mui/material";
import "./styles.scss";
import data from "../../utils/data.json";

function Skills() {
  return (
    <main className="skills-page">
      <h2>Compétences</h2>
      <Container>
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
      </Container>
    </main>
  );
}

export default Skills;

import "./styles.scss";
import UpButton from "../../components/UpButton";
import Projects from "../../components/Projects";
import data from "../../utils/data.json";
import { useParams } from "react-router-dom";
import { Container, Divider } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import picture from "../../assets/img/projects.svg";

function ProjectsPage() {
  const { id } = useParams();
  const project = data.projects.find((project) => project.id === parseInt(id));

  return (
    <main className={"projects-page"}>
      {!project && (
        <img className="projects-picture" src={picture} alt="projects" />
      )}
      <Container>
        {project ? (
          <>
            <img
              className="projects-page__picture"
              src={project.picture}
              alt={"project screenshot"}
            />
            <div className="project__title">
              <ComputerIcon
                color="kaki"
                sx={{ fontSize: "2.4rem", marginRight: "1rem" }}
              />{" "}
              <h2>{project.name}</h2>
            </div>

            <div className="project__informations">
              <div className="project__informations-details">
                <h3>Détails du projet:</h3>
                <Divider />
                <div className="details__row">
                  <div className="details__row--title">
                    <h4>Résumé</h4>
                  </div>
                  <div className="details__row--content">
                    {project.resume && <p>{project.resume}</p>}
                  </div>
                </div>
                <Divider />
                <div className="details__row">
                  <div className="details__row--title">
                    <h4>Fonctionnalités</h4>
                  </div>
                  <div className="details__row--content"></div>
                </div>
                <Divider />
                <div className="details__row">
                  <div className="details__row--title">
                    <h4>Liens</h4>
                  </div>
                  <div className="details__row--content"></div>
                </div>
              </div>

              <div className="project__informations-technos">
                <h3>Technologies:</h3>
                <Divider />
                <div className="technos">
                  {project.technologies &&
                    project.technologies.map((techno) => {
                      const techToDisplay = data.technologies.find(
                        (technology) => technology.id === techno
                      );

                      return (
                        <div
                          className="technos__techno"
                          key={"techno-" + techToDisplay.name}
                        >
                          <div className="technos__techno--picture">
                            <img
                              src={techToDisplay.picture}
                              alt={techToDisplay.name}
                            />
                          </div>

                          <h4>{techToDisplay.name}</h4>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <Divider />
            <Projects />
            <UpButton page={true} />
          </>
        ) : (
          <>
            <Projects />
            <UpButton page={true} />
          </>
        )}
      </Container>
    </main>
  );
}

export default ProjectsPage;

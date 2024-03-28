import "./styles.scss";
import data from "../../utils/data.json";
import { Container, Grid } from "@mui/material";

function SkillsBar({ numberOfSkills = 6 }) {
  return (
    <>
      <section className={"skillsBar"}>
        <h2>Skills</h2>
        <div className={"skillsBar-container"}>
          <Container maxWidth={"lg"}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ width: "50px", marginTop: "10px", marginBottom: "10px" }}
            >
              {data.technologies.slice(0, numberOfSkills).map((techno) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={4}
                    lg={2}
                    key={"techno-" + techno.name}
                  >
                    <article className="techno-card">
                      <img src={techno.picture} alt={techno.name} />
                      <h3>{techno.name}</h3>
                    </article>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </section>
    </>
  );
}

export default SkillsBar;

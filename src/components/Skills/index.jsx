import "./styles.scss";
import data from "../../utils/data.json";
import { Container, Grid } from "@mui/material";

function Skills() {
  return (
    <>
      <section className={"skills"}>
        <h2>Skills</h2>
        <div className={"skills-container"}>
          {/* <Container maxWidth={"lg"}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ width: "50px" }}
            >
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <article>
                  <h3>Web Design</h3>
                  <ul>
                    <li>Responsive Design</li>
                    <li>Wireframing</li>
                    <li>UI/UX Design</li>
                  </ul>
                </article>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <article>
                  <h3>Frontend</h3>
                  <ul>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Angular</li>
                    <li>Sass</li>
                  </ul>
                </article>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <article>
                  <h3>Backend</h3>
                  <ul>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                    <li>MySQL</li>
                  </ul>
                </article>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <article>
                  <h3>Soft skills</h3>
                  <ul>
                    <li>Communication</li>
                  </ul>
                </article>
              </Grid>
            </Grid>
          </Container> */}
          <Container maxWidth={"lg"}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ width: "50px", marginTop: "10px" }}
            >
              {data.technologies.map((techno) => {
                return (
                  <Grid
                    item
                    xs={12}
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

export default Skills;

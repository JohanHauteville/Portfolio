import "./styles.scss";
import data from "../../utils/data.json";
import ProjectCard from "../ProjectCard";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Projects({ short = false }) {
  const navigate = useNavigate();
  const projects =
    short === false
      ? [...data.projects].reverse()
      : [...data.projects].slice(-6);

  function redirect() {
    navigate("/projects#projects");
    window.scrollTo(0, 0);
  }

  return (
    <section id={"projects"} className={"projects"}>
      <h2>Projects</h2>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
      >
        {projects.map((project) => {
          return (
            <Grid item xs={1} sm={1} md={1} lg={1} key={project.id}>
              <ProjectCard project={project} key={"project-" + project.id} />
            </Grid>
          );
        })}
      </Grid>
      {short && (
        // <Button variant={'contained'} href={"/projects"} color={"kaki"} fullWidth={false} classes={{root:"button-more"}} sx={{margin:"10px auto",fontWeight:500,fontFamily:"Poppins" ,color: "#fff"}}>More</Button>
        <Button
          variant={"contained"}
          onClick={redirect}
          color={"kaki"}
          fullWidth={false}
          classes={{ root: "button-more" }}
          sx={{
            margin: "10px auto",
            fontWeight: 500,
            fontFamily: "Poppins",
            color: "#fff",
          }}
        >
          More
        </Button>
      )}
    </section>
  );
}

export default Projects;

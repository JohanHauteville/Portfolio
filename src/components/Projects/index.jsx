import './styles.scss'
import data from '../../utils/data.json'
import ProjectCard from "../ProjectCard";
import {Grid} from "@mui/material";
function Projects(){
    return(
        <section id={"projects"} className={"projects"}>
            <h2>My Projects</h2>
            <Grid container  spacing={{ xs: 3, md: 3 }} columns={{ xs: 1, sm: 1, md: 2 ,lg:3}}>
                {data.projects.map( project => {
                    return (
                        <Grid item xs={1} sm={1} md={1} lg={1} key={project.id}>
                            <ProjectCard project={project} key={"project-" + project.id} />
                        </Grid>
                    )
                })}
            </Grid>
        </section>
    )
}

export default Projects;
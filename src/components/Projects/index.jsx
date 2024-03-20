import './styles.scss'
import data from '../../utils/data.json'
import ProjectCard from "../ProjectCard";
import {Button, Grid} from "@mui/material";
function Projects({short = false}){
    const projects = short === false ? [...data.projects].reverse() : [...data.projects].slice(-6)
    return(
        <section id={"projects"} className={"projects"}>
            <h2>My Projects</h2>
            <Grid container  spacing={{ xs: 3, md: 3 }} columns={{ xs: 1, sm: 1, md: 2 ,lg:3}}>
                {projects.map( project => {
                    return (
                            <Grid item xs={1} sm={1} md={1} lg={1} key={project.id}>
                                <ProjectCard project={project} key={"project-" + project.id} />
                            </Grid>
                    )
                })}
            </Grid>
            {short && (
                <Button variant={'contained'} href={"/projects"} color={"kaki"} fullWidth={false} classes={{root:"button-more"}} sx={{margin:"10px auto",fontWeight:500,fontFamily:"Poppins" ,color: "#fff"}}>More</Button>
            )}
        </section>
    )
}

export default Projects;
import './styles.scss'
import UpButton from "../../components/UpButton";
import Projects from "../../components/Projects";
import data from "../../utils/data.json";
import { useParams } from 'react-router-dom';
import {Divider} from "@mui/material";



function ProjectsPage(){
    const { id } = useParams()
    const project = data.projects.find( project => project.id === parseInt(id))

    return <main className={"projects-page"} >
        {project ? (
            <>
                <h2>{project.name}</h2>
                <img src={project.picture} alt={"project screenshot"}/>
                <Divider />
                <Projects />
                <UpButton />
            </>
        ):(
            <>
                <Projects />
                <UpButton page={true}/>
            </>
        )}

    </main>
}

export default ProjectsPage;
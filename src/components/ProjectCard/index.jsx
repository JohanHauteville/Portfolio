import './styles.scss'

import { Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function ProjectCard({project}){
    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
                sx={{ height: 160 }}
                image={project.picture}
                title={project.name}
            />
            <CardContent>
                <Typography gutterBottom color="kaki" variant="h5" component="div" align={"left"} sx={{ fontWeight: 500, fontFamily: "Poppins"}}>
                    {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align={"left"} noWrap={true} sx={{ fontWeight: 300, fontFamily: "Poppins"}}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                {project.github ? (
                    <Button color={"kaki"} size="small" href={project.github} sx={{ fontWeight: 500, fontFamily: "Poppins"}}>GitHub</Button>
                ):(
                    <Button color={"kaki"} disabled={true} size="small" href={project.github} sx={{ fontWeight: 500, fontFamily: "Poppins"}}>GitHub</Button>
                )}
                {project.externalLink && (
                    <Button color={"kaki"} size="small" href={project.externalLink} sx={{ fontWeight: 500, fontFamily: "Poppins"}}>View Project</Button>
                )}
                {project.npmLink && (
                    <Button color={"kaki"} size="small" href={project.npmLink} sx={{ fontWeight: 500, fontFamily: "Poppins"}}>View on NPM</Button>
                )}
            </CardActions>
        </Card>

    );
}


export default ProjectCard;
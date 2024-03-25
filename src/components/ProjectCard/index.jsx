import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { TAGS_REFERENCES } from "../../utils/constants";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/projects/" + project.id);
    window.scrollTo(0, 0);
  }

  return (
    <Card sx={{ maxWidth: 1000 }} elevation={10}>
      <CardMedia
        sx={{ height: 160, cursor: "pointer" }}
        image={project.picture}
        title={project.name}
        onClick={handleClick}
      />

      <CardContent>
        <Typography
          gutterBottom
          color="kaki"
          variant="h5"
          component="div"
          align={"left"}
          noWrap={true}
          sx={{ fontWeight: 500, fontFamily: "Poppins", color: "#678d7c" }}
        >
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align={"left"}
          noWrap={true}
          sx={{ fontWeight: 300, fontFamily: "Poppins" }}
        >
          {project.description}
        </Typography>
        <div className={"tags-container"}>
          {project.tags &&
            project.tags.map((tag, indice) => {
              const reference = TAGS_REFERENCES.find(
                (element) => element.name === tag
              );
              const chipColor = reference ? reference.color : undefined;
              return (
                <Chip
                  size={"small"}
                  color={chipColor}
                  label={tag}
                  variant="outlined"
                  key={project.id + "_" + tag + "_" + indice}
                />
              );
            })}
        </div>
      </CardContent>
      <CardActions>
        {project.github ? (
          <Button
            color={"kaki"}
            size="small"
            href={project.github}
            sx={{ fontWeight: 500, fontFamily: "Poppins" }}
          >
            GitHub
          </Button>
        ) : (
          <Button
            color={"kaki"}
            disabled={true}
            size="small"
            href={project.github}
            sx={{ fontWeight: 500, fontFamily: "Poppins" }}
          >
            GitHub
          </Button>
        )}
        {project.externalLink ? (
          <Button
            color={"kaki"}
            size="small"
            href={project.externalLink}
            sx={{ fontWeight: 500, fontFamily: "Poppins" }}
          >
            View Project
          </Button>
        ) : (
          <Button
            color={"kaki"}
            disabled={true}
            size="small"
            href={project.externalLink}
            sx={{ fontWeight: 500, fontFamily: "Poppins" }}
          >
            View Project
          </Button>
        )}
        {project.npmLink && (
          <Button
            color={"kaki"}
            size="small"
            href={project.npmLink}
            sx={{ fontWeight: 500, fontFamily: "Poppins" }}
          >
            View on NPM
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

//import backgroundBottom from "../../assets/img/wave-bottom.png";
import "./styles.scss";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { SOCIAL_LINK } from "../../utils/constants";
import { Button, Container, Divider } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="curriculum-container">
          <div>
            <h2>CV développeur Front-End React.js</h2>
            <p>Téléchargez mon CV pour en savoir d'avantage sur mon parcours</p>
          </div>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            color="kaki"
            sx={{
              fontWeight: 500,
              fontFamily: "Poppins",
              color: "#fff",
            }}
          >
            Télécharger
          </Button>
        </div>
        <Divider />
        <div className={"footer-links"}>
          <div className={"footer-link__infos"}>
            <h4>JOHAN HAUTEVILLE</h4>
            <h5>DÉVELOPPEUR FROND-END REACT JS</h5>
            <p>34000 Montpellier, France</p>
            <p>Port.: +33 6 10 69 09 91 </p>
          </div>
          <div className={"footer-link__social"}>
            <h4>Réseaux</h4>
            <div className="footer-link__social--link">
              <GitHub sx={{ color: "#fff", fontSize: "1.1rem" }} />
              <a
                href={SOCIAL_LINK.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div className="footer-link__social--link">
              <LinkedIn sx={{ color: "#fff", fontSize: "1.1rem" }} />
              <a
                href={SOCIAL_LINK.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <Divider />
        <div className="copyright">
          <p>
            ©2024 Developed by Johan Hauteville. <br />
            With: React . Material UI
          </p>
        </div>
      </Container>
      {/* <div className={"background-bottom"}>
        <img src={backgroundBottom} alt={"background bottom"} />
      </div> */}
    </footer>
  );
}

export default Footer;

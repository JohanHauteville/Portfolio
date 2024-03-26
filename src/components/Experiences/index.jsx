import "./styles.scss";
import image from "../../assets/img/experiences-img.svg";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Class, Work } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import data from "../../utils/data.json";

function Experiences({ short = false }) {
  const navigate = useNavigate();
  const experiences =
    data.experiences && short === true
      ? [...data.experiences.slice(0, 3)]
      : [...data.experiences];

  function redirect() {
    navigate("/about#experiences");
    window.scrollTo(0, 0);
  }

  return (
    <section id={"experiences"}>
      <h2>Experiences</h2>
      <div className="experiences-justify">
        <div className="experiences-container">
          <img
            className="experiences-container__picture"
            src={image}
            alt="experiences"
          />
          <Timeline className={"timeline"}>
            {experiences &&
              experiences.map((experience, index) => {
                return (
                  <TimelineItem key={"experiences-id-" + experience.id}>
                    <TimelineOppositeContent
                      color="text.secondary"
                      sx={{ fontSize: "calc(8px + 1vmin)", paddingLeft: "0" }}
                    >
                      {experience.duration.map((date) => (
                        <p
                          className={"timeline__date"}
                          key={"experiences-id-" + experience.id + "-" + date}
                        >
                          {date}
                        </p>
                      ))}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      {experience.type === "training" ? (
                        <TimelineDot color={"kakiLight"}>
                          <Class sx={{ color: "#fff" }} />
                        </TimelineDot>
                      ) : (
                        <TimelineDot color={"kaki"}>
                          <Work sx={{ color: "#fff" }} />
                        </TimelineDot>
                      )}

                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ fontSize: "calc(10px + 1vmin)", paddingRight: "0" }}
                    >
                      <span className="timeline__job-name">
                        {experience.jobName}
                      </span>
                      <br />
                      {experience.typeOfContract && (
                        <>
                          <span className="timeline__contract-type">
                            {experience.typeOfContract}
                          </span>
                          <br />
                        </>
                      )}

                      <span className="timeline__content">
                        {experience.content}
                      </span>
                      <br />
                      <br />
                    </TimelineContent>
                  </TimelineItem>
                );
              })}

            {short === true ? (
              <>
                <span className={"experiences-dot"}>
                  .<br />.<br />.
                </span>
                <Button
                  variant={"contained"}
                  onClick={redirect}
                  href={"/about#experiences"}
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
              </>
            ) : (
              <></>
            )}
          </Timeline>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

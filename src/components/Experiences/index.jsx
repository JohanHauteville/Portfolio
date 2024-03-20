import './styles.scss'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Class, Work } from '@mui/icons-material';
import {Button} from "@mui/material";
function Experiences({short= false}){
    return (
        <section id={"experiences"}>
            <h2>Expériences</h2>
            <Timeline position="alternate" className={"timeline"}>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary" sx={{ fontSize: "calc(8px + 1vmin)", paddingLeft:"0"}}>
                        Février 2024 <br/>
                        Décembre 2022
                        <br/><br/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={"kakiLight"}>
                            <Class sx={{ color: "#fff" }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingRight: "0"}}>
                        <strong>Formation Développeur d'Application Frontend - React</strong><br/>
                        OpenClassrooms
                        <br/><br/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary" sx={{ fontSize: "calc(8px + 1vmin)", paddingRight:"0"}}>
                        2023<br/>
                        2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={"kaki"}>
                            <Work sx={{ color: "#fff" }}/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: "calc(10px + 1vmin)", paddingLeft:"0"}}>
                        <strong>Co-Fondateur:<br/>Biscuiterie Kris et Jo</strong><br/>
                        Gestion de l'entreprise, création graphique, création et gestion du e-commerce.
                        <br/><br/>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary" sx={{ fontSize: "calc(8px + 1vmin)", paddingLeft:"0"}}>
                        2017<br/>
                        2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={"kaki"}>
                            <Work sx={{ color: "#fff" }}/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingRight: "0"}}>
                        <strong>Responsable logistique:<br/>T.M.A.</strong><br/>
                        CDI, Montpellier<br/>
                        Chargé de communication, gestion du parc informatique, responsable de la gestion des stocks.
                        <br/><br/>
                    </TimelineContent>
                </TimelineItem>
                {short === true ? (
                    <>
                        <span className={"experiences-dot"}>.<br/>.<br/>.</span>
                        <Button variant={'contained'} href={"/about#experiences"} color={"kaki"} fullWidth={false} classes={{root:"button-more"}} sx={{margin:"10px auto",fontWeight:500,fontFamily:"Poppins" ,color: "#fff"}}>More</Button>
                    </>

                ):(
                    <>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary"
                                                     sx={{fontSize: "calc(8px + 1vmin)", paddingRight: "0"}}>
                                2015<br/>
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kaki"}>
                                    <Work sx={{ color: "#fff" }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingLeft: "0"}}>
                                <strong>Graphiste maquétiste VFX: <br/>Freelance</strong><br/>
                                Réalisation de plaquettes, de cartes de visite et de vidéos marketing.
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary" sx={{ fontSize: "calc(8px + 1vmin)", paddingLeft:"0"}}>
                                2014<br/>
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kaki"}>
                                    <Work sx={{ color: "#fff" }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingRight: "0"}}>
                                <strong>Animateur 3D / Graphiste 2D<br/>IP. Studio</strong><br/>
                                Co-Fondateur, Montpellier<br/>
                                Responsable du pôle création des animations 3D d'un jeu mobile.
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary"
                                                     sx={{fontSize: "calc(8px + 1vmin)", paddingRight: "0"}}>
                                2012<br/>
                                2009
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kakiLight"}>
                                    <Class sx={{ color: "#fff" }} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingLeft: "0"}}>
                                <strong>Formation: <br/>Graphiste et Animation 3D</strong><br/>
                                Aries, Pérols
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary" sx={{ fontSize: "calc(8px + 1vmin)", paddingLeft:"0"}}>
                                2009<br/>
                                2008
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kaki"}>
                                    <Work sx={{ color: "#fff" }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingRight: "0"}}>
                                <strong>Stage<br/>Réparateur Informatique</strong><br/>
                                FOCS, Jacou<br/>
                                Maintenance des serveurs informatiques, réparation
                                d'ordinateurs Hardware pour les professionnels.
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary"
                                                     sx={{fontSize: "calc(8px + 1vmin)", paddingRight: "0"}}>
                                2008<br/>
                                2007
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kaki"}>
                                    <Work sx={{ color: "#fff" }} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingLeft: "0"}}>

                                <strong>Stage<br/>Responsable Informatique</strong><br/>
                                Mairie de Bouzigues<br/>
                                Maintenance des serveurs informatiques, réparation
                                d'ordinateurs Hardware pour les professionnels.
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary"
                                                     sx={{fontSize: "calc(8px + 1vmin)", paddingLeft: "0"}}>
                                2009<br/>
                                2006
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kakiLight"}>
                                    <Class sx={{ color: "#fff" }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingRight: "0"}}>
                                <strong>Brevet de Technicien Supérieur<br/>Informatique et Réseaux</strong><br/>
                                Lycée Jean Mermoz, Montpellier
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary"
                                                     sx={{fontSize: "calc(8px + 1vmin)", paddingRight: "0"}}>
                                2006
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"kakiLight"}>
                                    <Class sx={{ color: "#fff" }} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: "calc(10px + 1vmin)", paddingLeft: "0"}}>
                                <strong>Baccalauréat<br/>Sciences et Technologies Industrielles génie Électronique</strong><br/>
                                Lycée Joliot Curie, Sète
                                <br/><br/>
                            </TimelineContent>
                        </TimelineItem>
                    </>
                )}
            </Timeline>
        </section>

    )
}


export default Experiences;
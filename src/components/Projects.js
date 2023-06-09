import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Pokemon UI",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Kabi account book",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Kabi Figure bed",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "visualization",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                                 id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects,index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Coming soon</Tab.Pane>
                                <Tab.Pane eventKey="third">Coming soon</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    )
}
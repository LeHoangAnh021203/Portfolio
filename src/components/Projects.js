import React from "react";
import FloralFantasy from "../img/FloralFantasy.png";
import Fresher from "../img/Fresher.png";
import ComDung from "../img/ComDung.png";
import SufyStyles from "../img/SufyStyles.png";
import Github from "../img/Github.png"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "../CSS/Projects.css";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      name: "Floral Fantasy",
      description: "Design and develop a website selling perfume.",
      imgURL: FloralFantasy,
    },
  ];

  const projects2 = [
    {
      name: "Fresher Academy Management System",
      description:
        "Design and develop a fresher management website for FPT software Ho Chi Minh",
      imgURL: Fresher,
    },
  ];

  const projects3 = [
    {
      name: "Com Dung Website",
      description: "Design and develop a website selling foods.",
      imgURL: ComDung,
    },
  ];

  const projects4 = [
    {
      name: "Sufy Styles",
      description:
        "Social networking sites such as people can view information and buy user's outfits through photos other users have posted.",
      imgURL: SufyStyles,
    },
  ];

  const projects5 = [
    {
      name: "My Github",
      description:
        "U can see my project's detail and more...",
      imgURL: Github,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Something I Do</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Project One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Project Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Project Three</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourd">Project Four</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">Github to see more</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourd">
                  <Row>
                    {projects4.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="five">
                  <Row>
                    {projects5.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

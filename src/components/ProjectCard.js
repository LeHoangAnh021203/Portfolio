import React from "react";
import { Col } from "react-bootstrap";
import "../CSS/Projects.css";

const ProjectCard = ({ name, description, imgURL }) => {
  return (
    <Col sm={5} md={4}>
      <div className="proj-imgbx">
        <img src={imgURL} alt={`Project named ${name}`} />
        <div className="proj-txtx">
          <h4>{name}</h4>
          <span className="des">{description}</span>
          <a href="https://github.com/LeHoangAnh021203">
            <span className="git">more detail in Github...</span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

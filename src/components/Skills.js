import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teamwork from "../img/teamwork.jpg";
import presentation from "../img/presentation.jpg";
import design from "../img/design.jpg";
import study from "../img/study.jpg";
import time from "../img/time.jpg";
import english from "../img/english.jpg";
import japanese from "../img/japanese.jpg";
import react from "../img/react.png";
import Vite from "../img/Vite.png";
import Typescript from "../img/Typescript.png";
import javascript from "../img/javascript.png";
import htmlcss from "../img/htmlcss.png";
import java from "../img/java.png";
import sql from "../img/sql.png";
import visual from "../img/visual.png";
import mongo from "../img/mongo.png";
import android from "../img/android.png";
import "../CSS/Skills.css";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I hope to have more experience when joining your projects,
                working together and developing myself. It will really be nice
                to see your email.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={teamwork} alt="Image" />
                  <h5>Teamwork</h5>
                </div>

                <div className="item">
                  <img src={presentation} alt="Image" />
                  <h5>Presentation</h5>
                </div>

                <div className="item">
                  <img src={design} alt="Image" />
                  <h5>Design</h5>
                </div>

                <div className="item">
                  <img src={study} alt="Image" />
                  <h5>Study and search</h5>
                </div>

                <div className="item">
                  <img src={time} alt="Image" />
                  <h5>Time management</h5>
                </div>

                <div className="item">
                  <img src={english} alt="Image" />
                  <h5>English</h5>
                </div>

                <div className="item">
                  <img src={japanese} alt="Image" />
                  <h5>Japanese</h5>
                </div>
              </Carousel>
            </div>

            <div className="skill-bx">
              <h2>Frameworks, Programming languages and Tools</h2>
              <p>I usually use...</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={Vite} alt="Image" />
                  <h5>Vite</h5>
                </div>

                <div className="item">
                  <img src={Typescript} alt="Image" />
                  <h5>Typescript</h5>
                </div>

                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={htmlcss} alt="Image" />
                  <h5>Html & Css</h5>
                </div>

                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img src={visual} alt="Image" />
                  <h5>Visual Studio Code</h5>
                </div>

                <div className="item">
                  <img src={android} alt="Image" />
                  <h5>Android Studio</h5>
                </div>

                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

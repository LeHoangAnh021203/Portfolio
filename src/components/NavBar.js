import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/Navbar.css";
import { SlSocialLinkedin } from "react-icons/sl";

import { FaFacebook } from "react-icons/fa";
import portfolio from "../img/portfolio.jpg";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={portfolio} alt="logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/LeHoangAnh021203">
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a href="https://www.facebook.com/hoanganh.lee.5205">
                  <span>
                    <FaFacebook />
                  </span>
                </a>
                <a href="https://www.tiktok.com/@leanh_0212?_t=8mfPwsYt6HZ&_r=1">
                  <span>
                    <FaTiktok />
                  </span>
                </a>
                <a href="https://www.instagram.com/leanh_0212/">
                  <span>
                    <FaInstagram />
                  </span>
                </a>
                <a href="http://linkedin.com/in/hoanganhle0212">
                  <span>
                    <SlSocialLinkedin />
                  </span>
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

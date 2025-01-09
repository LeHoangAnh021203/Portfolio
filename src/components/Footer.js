import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../CSS/Footer.css";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={4}></Col>

          <Col sm={6} className="text-center text-sm-end align-items-center">
            <div className="social-icon">
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
            <p>&copy; Copyright 2024: LeHoangAnh.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import "../CSS/Footer.css";

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  // Clear the email field if subscription is successful
  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format and ensure `onValidated` is passed
    if (email && email.includes("@")) {
      if (onValidated) {
        onValidated({
          EMAIL: email,
        });
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  // Clear email field
  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="newsletter-container">
      <Col>
        <div className="newsletter-bx">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter</h3>
              {status === "sending" && <Alert variant="info">Sending...</Alert>}
              {status === "error" && <Alert variant="danger">{message}</Alert>}
              {status === "success" && (
                <Alert variant="success">{message}</Alert>
              )}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
};

export default Newsletter;

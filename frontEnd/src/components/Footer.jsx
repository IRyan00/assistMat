import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";
import { set } from "mongoose";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Footer = () => {
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${PUBLIC_KEY}`)
      .then(
        () => {
          setAlert({
            type: "success",
            message: "Message envoyé !",
          });
          e.target.reset();
        },
        () => {
          setAlert({ type: "danger", message: "Échec de l'envoi du message." });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={9} className="mx-auto">
            <h5 className="text-center my-5">Contactez-moi</h5>
            <Form onSubmit={sendEmail}>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="name">Nom :</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Votre nom"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="firstname">Prénom :</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      id="firstname"
                      required
                      placeholder="Votre prénom"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="emailFrom">Email :</Form.Label>
                    <Form.Control
                      type="email"
                      name="email_from"
                      id="email_from"
                      required
                      placeholder="Votre email"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="phone">Numéro :</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="Votre numéro"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="message">Message :</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  id="message"
                  required
                  rows={3}
                  placeholder="Votre message"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="success"
                  type="submit"
                  disabled={isLoading}
                  className="col-3 my-3"
                >
                  {isLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Envoyer"
                  )}
                </Button>
              </div>
              {alert && (
                <Alert
                  className="text-center col-8 mx-auto"
                  variant={alert.type}
                >
                  {alert.message}
                </Alert>
              )}
            </Form>
          </Col>
          <hr className="my-5 col-10 mx-auto" />
          <Col md={6} className="text-center mx-auto">
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-light">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-light">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Mon Site. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

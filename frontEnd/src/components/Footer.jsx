import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (data, e) => {
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
    <footer id="contact-section" className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={9} className="mx-auto">
            <h3 className="h2 text-center my-5">Contactez-moi</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="name">Nom :</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("name", { required: true })}
                      id="name"
                      placeholder="Votre nom"
                      isInvalid={!!errors.name}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="firstname">Prénom :</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("firstname", { required: true })}
                      id="firstname"
                      placeholder="Votre prénom"
                      isInvalid={!!errors.firstname}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="email_from">Email :</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email_from", { required: true })}
                      id="email_from"
                      placeholder="Votre email"
                      isInvalid={!!errors.email_from}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="phone">Numéro :</Form.Label>
                    <Form.Control
                      type="tel"
                      {...register("phone", { required: true })}
                      id="phone"
                      placeholder="Votre numéro"
                      isInvalid={!!errors.phone}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="message">Message :</Form.Label>
                <Form.Control
                  as="textarea"
                  {...register("message", { required: true })}
                  id="message"
                  rows={3}
                  placeholder="Votre message"
                  isInvalid={!!errors.message}
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

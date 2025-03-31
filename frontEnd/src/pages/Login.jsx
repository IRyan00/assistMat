import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;
const Login = () => {
  useEffect(() => {
    document.title = "Portfolio - Connexion";
  }, []);

  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        ...formData,
      });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigation("/");
        alert("Login successful");
      }, 300);
    } catch (error) {
      console.error("Login failed:", {
        message: error.message,
        status: error.response?.status,
      });
      alert("Échec de la connexion. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-4 p-md-5">
                <h1 className="text-center fw-bold mb-4">Connexion</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="name"
                      className="py-2"
                      {...register("name", { required: true })}
                      isInvalid={errors.name}
                    />
                    {errors.email && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Votre mot de passe"
                      className="py-2"
                      {...register("password", { required: true })}
                      isInvalid={errors.password}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 mb-3"
                  >
                    Se connecter
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

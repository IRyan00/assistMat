import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigation("/login");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm py-2 sticky-top bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Assistante maternelle
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav navbar-dark"
          className="border-0"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2">
            <Nav.Link as={Link} to="/" className="text-light px-3">
              Accueil
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="text-light px-3">
              A propos
            </Nav.Link>

            <Nav.Link as={Link} to="/welcome" className="text-light px-3">
              Accueil des enfants
            </Nav.Link>

            <Nav.Link as={Link} to="/activities" className="text-light px-3">
              Activités et pédagogie
            </Nav.Link>

            <Nav.Link as={Link} to="/reviews" className="text-light px-3">
              Témoignages et avis
            </Nav.Link>

            {!isLoggedIn ? (
              <Nav.Link as={Link} to="#contact" className="text-light px-3">
                Contact
              </Nav.Link>
            ) : (
              <div className="d-flex gap-2 flex-column flex-lg-row align-items-stretch align-items-lg-center mt-lg-0">
                <Nav.Link as={Link} to="/dashboard" className="text-light px-3">
                  Dashboard
                </Nav.Link>

                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

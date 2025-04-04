import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer Bootstrap CSS

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm py-3 sticky-top bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Assistante maternelle
          </Navbar.Brand>

          <Button
            variant="dark"
            onClick={() => setShowSidebar(true)}
            className="d-lg-none ms-auto"
          >
            <FaBars />
          </Button>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto align-items-lg-center gap-2">
              <Nav.Link as={Link} to="/" className="text-light px-3 fw-bold">
                Accueil
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-light px-3 fw-bold"
              >
                A propos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/reviews"
                className="text-light px-3 fw-bold"
              >
                Témoignages et avis
              </Nav.Link>
              {!isLoggedIn ? (
                <Nav.Link
                  onClick={handleContactScroll}
                  className="text-light px-3 fw-bold"
                >
                  Contact
                </Nav.Link>
              ) : (
                <div className="d-flex gap-2 flex-column flex-lg-row align-items-stretch align-items-lg-center mt-lg-0">
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                    className="text-light px-3 fw-bold"
                  >
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

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/"
              className="text-white fw-bold text-end mb-3"
              onClick={() => setShowSidebar(false)}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-white fw-bold text-end mb-3"
              onClick={() => setShowSidebar(false)}
            >
              A propos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/reviews"
              className="text-white fw-bold text-end mb-3"
              onClick={() => setShowSidebar(false)}
            >
              Témoignages et avis
            </Nav.Link>
            {!isLoggedIn ? (
              <Nav.Link
                className="text-white fw-bold text-end mb-3"
                onClick={() => {
                  handleContactScroll();
                  setShowSidebar(false);
                }}
              >
                Contact
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/seulmoiailedroit"
                  className="text-white fw-bold text-end"
                  onClick={() => setShowSidebar(false)}
                >
                  Administration
                </Nav.Link>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleLogout}
                  className="mt-3"
                >
                  Déconnexion
                </Button>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style>
        {`
          .offcanvas-header .btn-close {
            color: white;
            opacity: 1;
            filter: invert(1);
          }
        `}
      </style>
    </>
  );
}

export default CustomNavbar;

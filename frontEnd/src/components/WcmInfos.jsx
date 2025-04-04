import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaClock,
  FaPiggyBank,
  FaBaby,
  FaChair,
  FaBreadSlice,
  FaBook,
  FaTree,
  FaPuzzlePiece,
  FaPaintBrush,
  FaPen,
} from "react-icons/fa";

const WcmInfos = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleShowModal = (title, body) => {
    setModalContent({ title, body });
    setShowModal(true);
  };

  return (
    <>
      <Container className="py-3 col-12">
        <h2 className="h1 text-center my-5 pb-3">
          Informations sur <br /> l'accueil des enfants
        </h2>

        <Container className="my-5 col-12 mx-auto row gap-5">
          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-4 shadow"
            onClick={() =>
              handleShowModal("Places disponibles", `Plus de place disponible`)
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <FaChair size={50} color="black" className="p-0 mb-2" />
                <h5 className="mb-5">Places : 4/4</h5>
                <p className="text-danger mb-0 fw-bold">
                  Plus de place <br /> disponible
                </p>
              </Col>
            </Row>
          </Container>

          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal("Âge des enfants accueillis", "De 0 à 3 ans")
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <FaBaby size={50} color="black" className="p-0 mb-2" />
                <h5 className="mb-5">Âge :</h5>
                <p className="mb-0">
                  De 0 <br /> à 3 ans
                </p>
              </Col>
            </Row>
          </Container>

          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal("Jours d'accueil", "Du Mardi au Vendredi")
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <FaCalendarAlt size={50} color="black" className="p-0 mb-2" />
                <h5 className="mb-5">Jours :</h5>
                <p className=" mb-0">
                  Du Mardi <br /> au Vendredi
                </p>
              </Col>
            </Row>
          </Container>

          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal("Horaires d'accueil", "De 8h00 à 18h30")
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <FaClock size={50} color="black" className="p-0 mb-2" />
                <h5 className="mb-5">Horaires :</h5>
                <p className="mb-0">
                  De 8h00 <br /> à 18h30
                </p>
              </Col>
            </Row>
          </Container>

          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal(
                "Tarifs",
                <Row>
                  <Col>
                    <p>∙ 4.50€ de l'heure</p>
                    <p>∙ 2.00€ de charges</p>
                    <p className="m-0">∙ 3.00€ de repas (si non fourni)</p>
                  </Col>
                </Row>
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <FaPiggyBank size={50} color="black" className="p-0 mb-2" />
                <h5 className="mb-5">Tarifs :</h5>
                <p className="mb-0">
                  4.50€ de l'heure
                  <br /> 2.00€ de charges
                </p>
              </Col>
            </Row>
          </Container>

          <Container
            className="bg-body-secondary rounded-3 p-4 col-10 col-sm-5 col-lg-4 shadow"
            onClick={() =>
              handleShowModal(
                "Activités",
                <Row className="align-items-center justify-content-center text-center gap-4">
                  <Col xs={5}>
                    <FaTree size={50} color="black" className="p-0 mb-1" />
                    <h5 className="mb-3">Parc</h5>

                    <FaBreadSlice
                      size={50}
                      color="black"
                      className="p-0 mb-1"
                    />
                    <h5 className="mb-3">Pic-nic</h5>

                    <FaBook size={50} color="black" className="p-0 mb-1" />
                    <h5>Bibliothèque</h5>
                  </Col>

                  <Col xs={5}>
                    <FaPuzzlePiece
                      size={50}
                      color="black"
                      className="p-0 mb-1"
                    />
                    <h5 className="mb-3">Puzzle</h5>

                    <FaPaintBrush
                      size={50}
                      color="black"
                      className="p-0 mb-1"
                    />
                    <h5 className="mb-3">Peinture</h5>

                    <FaPen size={50} color="black" className="p-0 mb-1" />
                    <h5>Dessin</h5>
                  </Col>
                </Row>
              )
            }
          >
            <Row className="align-items-center justify-content-center text-center gap-1">
              <Col xs={5}>
                <FaTree size={50} color="black" className="p-0 mb-1" />
                <h5 className="mb-3">Parc</h5>

                <FaPuzzlePiece size={50} color="black" className="p-0 mb-1" />
                <h5 className="mb-0">Puzzle</h5>
              </Col>

              <Col xs={5}>
                <FaPaintBrush size={50} color="black" className="p-0 mb-1" />
                <h5 className="mb-3">Peinture</h5>

                <FaPen size={50} color="black" className="p-0 mb-1" />
                <h5 className="mb-0">Dessin</h5>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WcmInfos;

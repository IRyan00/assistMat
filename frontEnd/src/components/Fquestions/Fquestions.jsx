import "./Fquestions.css";
import { Accordion, Container } from "react-bootstrap";

function BasicExample() {
  return (
    <>
      <Container className="py-5">
        <h2 className="h1 text-center mb-5">F.A.Q.</h2>

        <Accordion
          className="my-5 col-10 col-md-8 mx-auto"
          defaultActiveKey="0"
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Quels sont les horaires de sieste et repas ?
            </Accordion.Header>
            <Accordion.Body>
              Le repas est aux environs de 12h et la sieste aux environs de 13h
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Y a-t-il des fournitures à prévoire ?
            </Accordion.Header>
            <Accordion.Body>
              Oui tout à fait, il faut fournir les couches, les produits
              d'hygiène, des rechanges en cas d'accident surtout en période
              d'apprentissage de la propreté ainsi que le repas & goûté pour
              ceux à qui je ne fournit pas ceci.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Question 3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Question 4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Question 5 </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default BasicExample;

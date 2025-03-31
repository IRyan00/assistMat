import { Container, Row, Col } from "react-bootstrap";

const Rooms = () => {
  return (
    <>
      <Container className="col-10 mx-auto">
        <Row className="mb-5">
          <h1 className="text-center my-5">Pièces de vie</h1>
          <div className="mb-5">
            <h2 className="text-center">Salon</h2>
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              alias iste dolorum similique numquam unde. Temporibus
              exercitationem ducimus error iusto fuga laborum repellendus atque
              consequatur ut impedit, nulla, est non!
            </p>
            <img
              className="img-fluid col-8 mx-auto d-flex mb-5"
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Salon"
            />
          </div>

          <div className="mb-5">
            <h2 className="text-center">Chambre</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              cumque expedita eos tempore nulla, consequuntur laudantium ex iure
              iusto impedit.
            </p>
            <img
              className="img-fluid col-8 mx-auto d-flex"
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Chambre"
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Rooms;

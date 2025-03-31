import { Container, Row, Col } from "react-bootstrap";

const Profiles = ({ profiles }) => {
  return (
    <>
      <Container className="col-10 mx-auto">
        <Row>
          <h1 className="text-center my-5" key={profiles.id}>
            {profiles.name}
          </h1>
          <img
            className="img-fluid col-5 mx-auto"
            src={profiles.image}
            alt={profiles.name}
          />
          <p className="my-5" key={profiles.id}>
            {profiles.desc}
          </p>
          <p className="my-5" key={profiles.id}>
            Diplômes et formations : {profiles.school}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Profiles;

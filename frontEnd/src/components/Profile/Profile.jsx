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
            className="img-fluid col-11 col-sm-9 col-md-7 col-lg-5 mx-auto"
            src={profiles.image}
            alt={profiles.name}
          />
          <p className="my-5" key={profiles.id}>
            {profiles.desc}
          </p>
          <p className="my-5 text-center" key={profiles.id}>
            {/* Diplômes et formations :{" "} */}
            <button id="btn" className="btn btn-primary">
              {profiles.school}
            </button>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Profiles;

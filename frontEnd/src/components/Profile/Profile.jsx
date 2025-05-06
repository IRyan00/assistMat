import { Container, Row } from "react-bootstrap";

const Profiles = ({ profiles }) => {
  const schools = Array.isArray(profiles.school)
    ? profiles.school
    : typeof profiles.school === "string"
    ? profiles.school.split(",")
    : [];

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
          <div className="my-5 text-center">
            {schools.map((diploma, index) => (
              <button key={index} className="btn btn-primary m-2">
                {diploma.trim()}
              </button>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Profiles;

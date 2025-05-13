import { Container, Row } from "react-bootstrap";
import "./Profile.css";

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
          <div id="btn" className="mb-5 text-center">
            {schools.map((diploma, index) => (
              <button
                key={index}
                className="button btn m-2 rounded-pill shadow"
              >
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

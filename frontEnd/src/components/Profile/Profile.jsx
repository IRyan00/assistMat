import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import "./Profile.css";

const Profiles = ({ profiles }) => {
  const [isLoading, setIsLoading] = useState(true);

  const schools = Array.isArray(profiles.school)
    ? profiles.school
    : typeof profiles.school === "string"
    ? profiles.school.split(",")
    : [];

  useEffect(() => {
    setIsLoading(false);
  }, [profiles]);

  return (
    <>
      <Container className="col-10 mx-auto">
        <Row>
          {isLoading ? (
            <div className="d-flex justify-content-center my-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Chargement...</span>
              </Spinner>
            </div>
          ) : (
            <>
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
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Profiles;

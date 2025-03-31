//get Reviews

import React, { useState, useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import axios from "axios";

import ReviewModal from "../components/ReviewModal";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/review/get`
        );
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Témoignages</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
        exercitationem quisquam consequatur accusamus eligendi dolore non. Id
        veniam aperiam harum quae, debitis quo, suscipit doloremque
        exercitationem similique voluptates molestias, eveniet totam consectetur
        quam animi cumque corporis. Praesentium, error minima. Quaerat
        temporibus mollitia quasi. Dolor quis corporis dolorem eius temporibus
        fugit.
      </p>
      <div className="d-flex justify-content-center">
        <ReviewModal />

        {/* <Button className="bg-success mt-5"> Ajouter un témoignage </Button> */}
      </div>
      <Row className="my-5 col-10 col-lg-4 mx-auto">
        {reviews.map((review) => (
          <Card key={review._id} className="mb-3 text-center">
            <Card.Body>
              <Card.Title className="mb-3">{review.name}</Card.Title>
              <Card.Text>{review.message}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;

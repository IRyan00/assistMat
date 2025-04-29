import "./Fquestions.css";
import { Accordion, Container } from "react-bootstrap";

const Fquestions = () => {
  const faqs = [
    {
      id: 1,
      question: "Quels sont les horaires de sieste et de repas ?",
      answer:
        "Le repas est aux environs de 12h et la sieste aux environs de 13h",
    },
    {
      id: 2,
      question: "Quels sont les horaires de sieste et de repas ?",
      answer:
        "Le repas est aux environs de 12h et la sieste aux environs de 13h",
    },
    {
      id: 3,
      question: "Quels sont les horaires de sieste et de repas ?",
      answer:
        "Le repas est aux environs de 12h et la sieste aux environs de 13h",
    },
    {
      id: 4,
      question: "Quels sont les horaires de sieste et de repas ?",
      answer:
        "Le repas est aux environs de 12h et la sieste aux environs de 13h",
    },
    {
      id: 5,
      question: "Quels sont les horaires de sieste et de repas ?",
      answer:
        "Le repas est aux environs de 12h et la sieste aux environs de 13h",
    },
  ];

  return (
    <Container id="back" fluid>
      <Container className="my-5 pb-5 pt-3 col-10 col-md-8 mx-auto">
        <Container className="text-center my-5">
          <h2 className="h1">F.A.Q.</h2>
          <p className="fst-italic fw-lighter">
            Vous avez des interrogations ?
          </p>
        </Container>

        <Container>
          <Accordion defaultActiveKey="0" className="border-0">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                eventKey={faq.id}
                className="border-0"
              >
                <Accordion.Header className="border-0">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body className="border-0">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </Container>
    </Container>
  );
};

export default Fquestions;

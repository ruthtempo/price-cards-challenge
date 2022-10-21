import { Button, Card, Col, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import img1 from "../media/1.svg";
import img2 from "../media/2.svg";
import img3 from "../media/2.svg";

const pricingPLans = [
  {
    preTitle: "Starter",
    title: "Free",
    subtitle: "per month",
    img: img1,
    features: [
      "Full courses library",
      "A new daily meditation",
      "Access to meditation guru",
      "Mindful Exercices",
      "Guided Meditations",
      "Cooking Recipes",
    ],
    actionButton: "Get Started",
  },
  {
    preTitle: "Starter",
    title: "Free",
    subtitle: "per month",
    img: img2,
    features: [
      "Full courses library",
      "A new daily meditation",
      "Access to meditation guru",
      "Mindful Exercices",
      "Guided Meditations",
      "Cooking Recipes",
    ],
    actionButton: "Get Started",
  },
  {
    preTitle: "Starter",
    title: "Free",
    subtitle: "per month",
    img: img3,
    features: [
      "Full courses library",
      "A new daily meditation",
      "Access to meditation guru",
      "Mindful Exercices",
      "Guided Meditations",
      "Cooking Recipes",
    ],
    actionButton: "Get Started",
  },
];
export const PricingCards = () => {
  return (
    <Row className="mt-4">
      {pricingPLans.map((plan) => (
        <Col sm={4} lg={4} xxl={{ span: 3, offset: 1 }} className="mb-2">
          <Card className="h-100">
            <Card.Img src={plan.img} className="mt-3" />
            <Card.Body className="d-flex flex-column">
              <span>type</span>
              <Card.Title className="h5">price</Card.Title>
              <Card.Subtitle>subtitle</Card.Subtitle>
              <span className="mb-3">per month</span>
              <div>
                {plan.features.map((feature) => (
                  <p>
                    <Check size={30} /> {feature}
                  </p>
                ))}
              </div>

              <Button className="w-75">action</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

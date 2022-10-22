import { Button, Card, Col, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import img1 from "../media/1.svg";
import img2 from "../media/1.svg";
import img3 from "../media/1.svg";

const pricingPLans = [
  {
    preTitle: "Starter",
    title: "Free",
    img: img1,
    featureList: [
      { feature: "Full courses library", included: true },
      { feature: "A new daily meditation", included: true },
      { feature: "Access to meditation guru", included: true },
      { feature: "Sleep podcasts and exercices", included: false },
      { feature: "Mindfulness Exercices", included: false },
      { feature: "Guided meditations", included: false },
      { feature: "Cooking Recipes", included: false },
    ],
    actionText: "Get Started",
  },
  {
    preTitle: "Pro",
    title: "$49",
    img: img2,
    featureList: [
      { feature: "Full courses library", included: true },
      { feature: "A new daily meditation", included: true },
      { feature: "Access to meditation guru", included: true },
      { feature: "Sleep podcasts and exercices", included: true },
      { feature: "Mindfulness Exercices", included: true },
      { feature: "Guided meditations", included: false },
      { feature: "Cooking Recipes", included: false },
    ],
    actionText: "Become a Pro",
  },
  {
    preTitle: "Teams",
    title: "$99",
    img: img3,
    featureList: [
      { feature: "Full courses library", included: true },
      { feature: "A new daily meditation", included: true },
      { feature: "Access to meditation guru", included: true },
      { feature: "Sleep podcasts and exercices", included: true },
      { feature: "Mindfulness Exercices", included: true },
      { feature: "Guided meditations", included: true },
      { feature: "Cooking Recipes", included: true },
    ],
    actionText: "Get Teams",
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
              <span>{plan.preTitle}</span>
              <Card.Title className="h5">{plan.title}</Card.Title>
              <Card.Subtitle>subtitle</Card.Subtitle>
              <span className="mb-3">per month</span>
              <div>
                {plan.featureList.map((feature) => (
                  <p style={{ color: !feature.included ? "lightgrey" : "" }}>
                    <Check size={30} /> {feature.feature}
                  </p>
                ))}
              </div>

              <Button className="w-75">{plan.actionText}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

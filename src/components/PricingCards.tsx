import { Button, Card, Col, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import img1 from "../media/1.png";
import img2 from "../media/2.png";
import img3 from "../media/3.png";

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
          <Card className="h-100 shadow" role="button">
            <Card.Img src={plan.img} className="mt-3 img-top flex-grow-1" />
            <Card.Body className="d-flex flex-column ms-2 flex-grow-0">
              <p>{plan.preTitle}</p>
              <Card.Title className="fs-3 ">{plan.title}</Card.Title>
              <Card.Subtitle className="fs-6 mb-3 fw-lighter">
                per month
              </Card.Subtitle>

              <Card.Text>
                {plan.featureList.map((feature) => (
                  <p style={{ color: !feature.included ? "lightgrey" : "" }}>
                    <Check size={30} /> {feature.feature}
                  </p>
                ))}
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button className="w-75">{plan.actionText}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

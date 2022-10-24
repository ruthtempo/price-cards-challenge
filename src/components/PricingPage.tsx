import { Col, Row } from "react-bootstrap";
import { PlanCard } from "./PlanCard";
import img1 from "../media/1.png";
import img2 from "../media/2.png";
import img3 from "../media/3.png";

export type Feature = {
  feature: string;
  included: boolean;
};
export type Plan = {
  id: string;
  title: string;
  price: string;
  img: string;
  featureList: Feature[];
  actionText: string;
};

const pricingPlans: Plan[] = [
  {
    id: "1",
    title: "Starter",
    price: "Free",
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
    id: "2",
    title: "Pro",
    price: "$49",
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
    id: "3",
    title: "Teams",
    price: "$99",
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

export const PricingPage = () => {
  return (
    <Row className="mt-4 planWrapper ">
      {pricingPlans.map((plan) => (
        <Col
          className="mb-3"
          md={{ span: 6, offset: 3 }}
          lg={{ span: 4, offset: 0 }}
        >
          <PlanCard plan={plan} />
        </Col>
      ))}
    </Row>
  );
};

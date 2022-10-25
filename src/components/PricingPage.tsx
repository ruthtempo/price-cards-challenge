import { Col, Row } from "react-bootstrap";
import { PlanCard } from "./PlanCard";
import img1 from "../media/free.png";
import img2 from "../media/pro.png";
import img3 from "../media/teams.png";

export type Feature = {
  name: string;
  included: boolean;
};
export type Plan = {
  id: string;
  variant: "secondary" | "primary";
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
    variant: "secondary",
    img: img1,
    featureList: [
      { name: "Full courses library", included: true },
      { name: "A new daily meditation", included: true },
      { name: "Access to meditation guru", included: true },
      { name: "Sleep podcasts and exercices", included: false },
      { name: "Mindfulness Exercices", included: false },
      { name: "Guided meditations", included: false },
      { name: "Cooking Recipes", included: false },
    ],
    actionText: "Get Started",
  },
  {
    id: "2",
    title: "Pro",
    price: "$49",
    variant: "primary",
    img: img2,
    featureList: [
      { name: "Full courses library", included: true },
      { name: "A new daily meditation", included: true },
      { name: "Access to meditation guru", included: true },
      { name: "Sleep podcasts and exercices", included: true },
      { name: "Mindfulness Exercices", included: true },
      { name: "Guided meditations", included: false },
      { name: "Cooking Recipes", included: false },
    ],
    actionText: "Become a Pro",
  },
  {
    id: "3",
    title: "Teams",
    price: "$99",
    variant: "secondary",
    img: img3,
    featureList: [
      { name: "Full courses library", included: true },
      { name: "A new daily meditation", included: true },
      { name: "Access to meditation guru", included: true },
      { name: "Sleep podcasts and exercices", included: true },
      { name: "Mindfulness Exercices", included: true },
      { name: "Guided meditations", included: true },
      { name: "Cooking Recipes", included: true },
    ],
    actionText: "Get Teams",
  },
];

export const PricingPage = () => {
  return (
    <Row className="mt-4 planWrapper">
      {pricingPlans.map((plan) => (
        <Col
          key={plan.title}
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

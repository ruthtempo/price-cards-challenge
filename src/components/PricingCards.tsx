import { Col, Row } from "react-bootstrap";
import { pricingPlans } from "../App";
import { PlanCard } from "./PlanCard";

export const PricingCards = () => {
  return (
    <Row className="mt-4">
      {pricingPlans.map((plan) => (
        <Col sm={4} lg={4} className="mb-2">
          <PlanCard plan={plan} />
        </Col>
      ))}
    </Row>
  );
};

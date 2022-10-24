import { Col, Row } from "react-bootstrap";
import { pricingPlans } from "../App";
import { PlanCard } from "./PlanCard";

export const PricingPage = () => {
  return (
    <Row className="mt-4 planWrapper">
      {pricingPlans.map((plan) => (
        <Col lg={4} className="mb-2">
          <PlanCard plan={plan} />
        </Col>
      ))}
    </Row>
  );
};

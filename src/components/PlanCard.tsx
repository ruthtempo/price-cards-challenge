import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { Plan } from "./PricingPage";
import image from "../media/modal_img.png";
import "../cards.css";

export const PlanCard = (p: { plan: Plan }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleShowSignUpModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Card
        className={`h-100 shadow border-0 animate ${
          p.plan.id === "2" ? "text-white highlightedPlan" : "secondaryPlan"
        }`}
      >
        <Card.Img
          src={p.plan.img}
          className="mt-3 img-top"
          alt="meditating-illustration"
        />

        <Card.Body className="d-flex flex-column ms-2 collapse">
          <p className="h5 text-center">{p.plan.title}</p>
          <Card.Title className="display-6 text-center">
            {p.plan.price}
          </Card.Title>
          <Card.Subtitle className="fs-6 mb-4 fw-light text-center">
            per month
          </Card.Subtitle>

          <Card.Text className="d-flex justify-content-center">
            <div>
              {p.plan.featureList.map((feature) => (
                <p
                  className={!feature.included ? "text-black-50 fw-light" : ""}
                >
                  <Check size={30} /> {feature.feature}
                </p>
              ))}
            </div>
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Button
              size="lg"
              className="w-75 rounded-pill shadow-sm"
              variant={p.plan.id === "2" ? "dark" : "outline-dark"}
              onClick={handleShowSignUpModal}
            >
              {p.plan.actionText}
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleModalClose} className="text-center">
        <Modal.Header closeButton className="border-bottom-0"></Modal.Header>
        <Modal.Body className="signUp">
          <img src={image} className="w-50" alt="girls-meditating" />
          <h4 className="display-4 mb-4">Sign Up</h4>
          <p>Please Sign up your email and we will get in touch with you</p>
          <Form>
            <Form.Control
              className="mb-4"
              size="lg"
              type="text"
              placeholder="name@company.com"
              required
            />
            <Button type="submit" className="w-25 rounded-pill" variant="dark">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

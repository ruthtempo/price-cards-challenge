import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { Plan } from "./PricingPage";
import image from "../media/modal_img.png";
import "./PlanCard.css";

export const PlanCard = (p: { plan: Plan }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleShowSignUpModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Card
        className={`shadow border-0 animate ${
          p.plan.variant === "primary"
            ? "text-white highlightedPlan py-4"
            : "secondaryPlan mt-lg-4"
        }`}
      >
        <Card.Img
          src={p.plan.img}
          className="mt-3 img-top w-75 align-self-center"
          alt="meditating-illustration"
        />

        <Card.Body className="d-flex flex-column ms-2 collapse">
          <h5 className="text-center">{p.plan.title}</h5>
          <Card.Title className="display-6 text-center">
            {p.plan.price}
          </Card.Title>
          <Card.Subtitle className="fs-6 mb-4 fw-light text-center">
            per month
          </Card.Subtitle>
          <div className="d-flex justify-content-center pb-2">
            <ul className="list-unstyled">
              {p.plan.featureList.map((feature, index) => (
                <li
                  key={index}
                  className={`pb-3 ${
                    !feature.included ? "text-black-50 fw-light" : ""
                  }`}
                >
                  <Check size={30} /> {feature.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-center">
            <Button
              size="lg"
              className="w-75 rounded-pill shadow-sm mb-2"
              variant={p.plan.variant === "primary" ? "dark" : "outline-dark"}
              onClick={handleShowSignUpModal}
            >
              {p.plan.actionText}
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        className="text-center"
        centered
      >
        <Modal.Header closeButton className="border-bottom-0"></Modal.Header>
        <Modal.Body className="signUp">
          <img src={image} className="w-50" alt="girls-meditating" />
          <h4 className="display-4 mb-4">Sign Up</h4>
          <p>Please Sign up your email and we will get in touch with you</p>
          <Form>
            <Form.Control
              className="mb-4"
              size="lg"
              type="email"
              placeholder="name@company.com"
              required
            />
            <Button type="submit" className=" rounded-pill mb-2" variant="dark">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

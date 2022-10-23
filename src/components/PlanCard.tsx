import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { Plan } from "../App";
import image from "../media/1.png";

export const PlanCard = (p: { plan: Plan }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleShowSignUpModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Card
        className={
          "h-100 shadow" +
          (p.plan.id === "2"
            ? "border border-4 border-dark text-white"
            : "border border-info")
        }
        role="button"
        style={{ backgroundColor: p.plan.id === "2" ? "#5A45F2" : "" }}
      >
        <Card.Img src={p.plan.img} className="mt-3 img-top " />

        <Card.Body className="d-flex flex-column ms-2 collapse">
          <p className="h5 text-center">{p.plan.title}</p>
          <Card.Title className="fs-3 text-center">{p.plan.price}</Card.Title>
          <Card.Subtitle className="fs-6 mb-4 fw-light text-center">
            per month
          </Card.Subtitle>

          <Card.Text>
            {p.plan.featureList.map((feature) => (
              <p style={{ color: !feature.included ? "#C0C0C0" : "" }}>
                <Check size={30} /> {feature.feature}
              </p>
            ))}
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Button
              size="lg"
              className="w-75 rounded-pill"
              variant={p.plan.id === "2" ? "dark" : "info"}
              onClick={handleShowSignUpModal}
            >
              {p.plan.actionText}
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleModalClose} className="text-center">
        <Modal.Header closeButton className="border-bottom-0"></Modal.Header>
        <Modal.Body>
          <img src={image} className="w-50" />
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
            <Button type="submit">Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

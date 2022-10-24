import { Container } from "react-bootstrap";
import { PricingPage } from "./components/PricingPage";

function App() {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <PricingPage />
    </Container>
  );
}

export default App;

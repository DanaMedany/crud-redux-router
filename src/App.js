import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}></Col>
      </Row>
    </Container>
  );
}

export default App;

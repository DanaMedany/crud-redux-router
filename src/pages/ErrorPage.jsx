import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="mt-5 text-center">
        <Col xs={{ span: 8, offset: 2 }}>
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() => navigate("/", { replace: true })}
          >
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;

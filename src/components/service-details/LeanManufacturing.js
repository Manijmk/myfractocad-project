import { Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function LeanManufacturing() {
  return (
    <div className="lean-manufacturing">
      <Card className="mb-4 shadow">
        <Row className="g-0">
          <Col md={8}>
            <Card.Body>
              <h2>Process Optimization</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Value Stream Mapping</ListGroup.Item>
                <ListGroup.Item>Waste Reduction Strategies</ListGroup.Item>
                <ListGroup.Item>Continuous Improvement</ListGroup.Item>
                {/* Add other list items */}
              </ListGroup>
            </Card.Body>
          </Col>
          <Col md={4}>
            <img 
              src="/images/lean-mfg-bg.jpg" 
              alt="Lean Manufacturing" 
              className="img-fluid rounded-end"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
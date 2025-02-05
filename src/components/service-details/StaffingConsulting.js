import { Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function StaffingConsulting() {
  return (
    <div className="staffing-consulting">
      <Card className="mb-4 shadow">
        <Row className="g-0">
          <Col md={4}>
            <img 
              src="/images/staffing-bg.jpg" 
              alt="Staffing & Consulting" 
              className="img-fluid rounded-start"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <h2>Expert Engineering Staffing</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Onsite Technical Support</ListGroup.Item>
                <ListGroup.Item>Offshore Engineering Teams</ListGroup.Item>
                <ListGroup.Item>Skill Development Programs</ListGroup.Item>
                {/* Add other list items */}
              </ListGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
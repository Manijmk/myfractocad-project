import { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { Cpu, PeopleFill, GearWideConnected } from 'react-bootstrap-icons';

export default function Services() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        }, { threshold: 0.1 });
      
        observer.observe(document.getElementById('services'));
        // Repeat for other sections
      }, []);


  return (
    <section id="services" className="py-5">
        <div className="position-absolute top-0 start-0 w-100 h-100" 
           style={{ 
             background: `linear-gradient(45deg, #ffffff 25%, transparent 25%),
                          linear-gradient(-45deg, #ffffff 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, #ffffff 75%),
                          linear-gradient(-45deg, transparent 75%, #ffffff 75%)`,
             backgroundSize: '20px 20px',
             opacity: 0.1,
             zIndex: -1
           }} 
      />
      <Container>
        <h2 className="text-center mb-5 display-5">Our Services</h2>

        {/* Digital Manufacturing Section */}
        <div id="digital-manufacturing" className="mb-5">
          <h3 className="mb-4">
            <Cpu className="me-2" size={30} />
            Digital Manufacturing
          </h3>

          <Row className="g-4">
            {/* Body in White */}
            <Col md={6}>
              <Card className="h-100 shadow">
                <Card.Header className="bg-primary text-white">
                  Body in White Solutions
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Process Planning</ListGroup.Item>
                    <ListGroup.Item>Tooling Design</ListGroup.Item>
                    <ListGroup.Item>Robot Simulation</ListGroup.Item>
                    <ListGroup.Item>3D Digital Factory Design</ListGroup.Item>
                    <ListGroup.Item>Technical Documentation</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Metal Stamping */}
            <Col md={6}>
              <Card className="h-100 shadow">
                <Card.Header className="bg-primary text-white">
                  Metal Stamping Solutions
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    FACTOCAD provides comprehensive sheet metal formability solutions:
                  </p>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Die Design Engineering</ListGroup.Item>
                    <ListGroup.Item>Stamping Simulation</ListGroup.Item>
                    <ListGroup.Item>Hemming Simulation</ListGroup.Item>
                  </ListGroup>
                  <div className="mt-3 p-3 bg-light rounded">
                    <small>
                      Capability to validate assembly of closure panels (SKIN PANEL) and production of complex sheet metal parts.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Staffing & Consulting Section */}
        <div id="staffing-consulting" className="mb-5">
          <h3 className="mb-4">
            <PeopleFill className="me-2" size={30} />
            Staffing & Consulting
          </h3>

          <Card className="shadow">
            <Card.Body>
              <p className="lead">
                Our engineers are experts in high-end industrial software and are available to support customer project needs both onsite and offshore.
              </p>
              <Row className="g-4">
                <Col md={6}>
                  <h5>Our Expertise:</h5>
                  <ListGroup>
                    <ListGroup.Item>OEM Standards Implementation</ListGroup.Item>
                    <ListGroup.Item>Skill-set Upgradation Programs</ListGroup.Item>
                    <ListGroup.Item>Customized Engineering Solutions</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h5>Software Proficiency:</h5>
                  <div className="software-grid">
                    {[
                      'Robcad',
                      'Delmia V5',
                      'Process Simulate',
                      'Process Designer',
                      'Roboguide',
                      'Robotstudio',
                      'CATIA V5',
                      'UGNX',
                      'Microstation',
                      'Plant Simulation',
                      'Stamping Simulation',
                    ].map((software, index) => (
                      <Badge key={index} bg="primary" className="me-2 mb-2">
                        {software}
                      </Badge>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Lean Manufacturing Section */}
        <div id="lean-manufacturing">
          <h3 className="mb-4">
            <GearWideConnected className="me-2" size={30} />
            Lean Manufacturing
          </h3>
          <Card className="shadow">
            <Card.Body>
              <div className="alert alert-info">
                Content coming soon - Currently under development
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}
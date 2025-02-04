import { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { CheckCircle, People, ClipboardCheck } from 'react-bootstrap-icons';

export default function About() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(document.getElementById('about'));
        // Repeat for other sections
    }, []);
    return (
        <section id="about" className="py-5" style={{ background: '#f4f9ff' }}>
            <Container>
                <h2 className="text-center mb-5 display-5">Who Are We?</h2>

                <Row className="g-4">
                    <Col lg={8}>
                        <p className="lead text-muted">
                            Factocad Robotics and Automation India Pvt Ltd is a fast-growing digital manufacturing engineering solutions provider.
                        </p>

                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex align-items-center">
                                <CheckCircle className="text-primary me-3" size={24} />
                                BIW (Body in White) &
                                Locomotive Weld Line Solutions
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                                <People className="text-primary me-3" size={24} />
                                Complete Manufacturing Automation Lifecycle Management
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                                <ClipboardCheck className="text-primary me-3" size={24} />
                                Robotic Systems for Spot
                                Welding, MIG Welding & Sealing
                            </ListGroup.Item>
                        </ListGroup>
                        <br />
                        <p>Our team brings together <span class="highlight">virtual and real shop floor expertise</span> in
                            process planning, 3D layout design, robotic simulation, and offline programming. We maintain
                            <span class="highlight"> ISO-certified quality standards</span> across all our solutions.
                        </p>
                    </Col>

                    <Col lg={4}>
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title>Core Competencies</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Process Planning</ListGroup.Item>
                                    <ListGroup.Item>Fixture Design</ListGroup.Item>
                                    <ListGroup.Item>Robotic Simulation</ListGroup.Item>
                                    <ListGroup.Item>Technical Documentation</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
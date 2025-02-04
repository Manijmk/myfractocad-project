// components/ServicesPreview.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackgroundImage1 from '../assets/images/bg-2.jpg'
import BackgroundImage2 from '../assets/images/staffing-1.jpg'
import BackgroundImage3 from '../assets/images/bg-4.png'

const services = [
  {
    id: 'digital-manufacturing',
    title: 'Digital Manufacturing',
    highlight: 'From Design to Production',
    bgImage: BackgroundImage1
  },
  {
    id: 'staffing-consulting',
    title: 'Staffing & Consulting',
    highlight: 'Expert Engineering Resources',
    bgImage: BackgroundImage2
  },
  {
    id: 'lean-manufacturing',
    title: 'Lean Manufacturing',
    highlight: 'Process Optimization',
    bgImage: BackgroundImage3
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-5 text-black">
      <Container>
        <h2 className="text-center mb-5 display-4">Our Services</h2>
        <Row className="g-4">
          {services.map((service) => (
            <Col key={service.id} md={4}>
              <Card
                as={Link}
                to={`/services/${service.id}`}
                className="text-decoration-none h-100 service-card shadow-lg"
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  minHeight: '300px'
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center text-center text-white">
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="lead mb-0">{service.highlight}</p>
                  <p>{"Learn More >"}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
import { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GeoAlt, Envelope, Telephone } from 'react-bootstrap-icons';

export default function Contact() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        }, { threshold: 0.1 });
      
        observer.observe(document.getElementById('contact'));
        // Repeat for other sections
      }, []);


  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5">Contact Us</h2>
        
        <Row className="g-5">
          <Col lg={6}>
            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Email" required />
                </Col>
                <Col md={12}>
                  <Form.Control type="text" placeholder="Company Name" />
                </Col>
                <Col md={12}>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Project Details (Industry, Application, Requirements)"
                    required
                  />
                </Col>
                <Col md={12} className="text-center">
                  <Button variant="primary" size="lg">
                    Submit Inquiry
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col lg={6}>
            <div className="map-container shadow-lg rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.462385352913!2d77.5954878148216!3d13.335218090625255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c13b5e3c11d%3A0xf8f3d1f3e3e3e3e3!2sFactocad%20Robotics%20and%20Automation%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1622541414141!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{border:0}}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
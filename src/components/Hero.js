import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { GearWideConnected } from 'react-bootstrap-icons';

export default function Hero() {

    // In each component


  return (
    <section className="hero-section text-white py-5">
      <Container className="text-center py-5">
        <h1 className="display-4 mb-4 fw-bold">
          <GearWideConnected className="me-3" size={40} />
          Transforming Manufacturing Through Automation
        </h1>
        <p className="lead fs-4">
          Global provider of turnkey industrial automation solutions for automotive, aerospace, and locomotive industries
        </p>
      </Container>
    </section>
  );
}
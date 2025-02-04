import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import { Briefcase, People, Building, CheckCircle } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';


export default function Counter() {
  const counters = [
    {
      id: 1,
      icon: <Briefcase size={40} className="mb-3" />,
      end: 456,
      suffix: '+',
      label: 'Projects Completed'
    },
    {
      id: 2,
      icon: <People size={40} className="mb-3" />,
      end: 45,
      suffix: '+',
      label: 'Happy Clients'
    },
    {
      id: 3,
      icon: <Building size={40} className="mb-3" />,
      end: 25,
      suffix: '+',
      label: 'MNC Projects'
    },
    {
      id: 4,
      icon: <CheckCircle size={40} className="mb-3" />,
      end: 6548,
      suffix: '+',
      label: 'Employees'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <section id="counter" className="py-5 bg-light" ref={ref}>
      <Container>
        <Row className="g-4">
          {counters.map((counter) => (
            <Col key={counter.id} md={6} lg={3} className="text-center">
              <div className="counter-item p-4 rounded shadow-sm bg-white">
                <div className="text-primary">
                  {counter.icon}
                </div>
                <h3 className="display-4 fw-bold mb-2">
                  {inView && (
                    <CountUp 
                      end={counter.end} 
                      suffix={counter.suffix} 
                      duration={3} 
                    />
                  )}
                </h3>
                <p className="mb-0 text-muted">{counter.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
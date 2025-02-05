// pages/ServiceDetail.js
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import DigitalManufacturing from '../components/service-details/DigitalManufacturing';
import StaffingConsulting from '../components/service-details/StaffingConsulting';
import LeanManufacturing from '../components/service-details/LeanManufacturing';

const serviceComponents = {
    'digital-manufacturing': DigitalManufacturing,
    'staffing-consulting': StaffingConsulting,
    'lean-manufacturing': LeanManufacturing
};

export default function ServiceDetail() {
    const { serviceId } = useParams();
    const ServiceComponent = serviceComponents[serviceId];

    return (
        <div className="service-detail-page">
            <Container>
                <Button
                    as={Link}
                    to="/"
                    variant="light"
                    className="mb-4"
                >
                    <ArrowLeft className="me-2" /> Back to Services
                </Button>

                {ServiceComponent ? <ServiceComponent /> : <div>Service not found</div>}
            </Container>
        </div>
    );
}
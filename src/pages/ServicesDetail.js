// pages/ServiceDetail.js
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import BackgroundImage1 from '../assets/images/bg-2.jpg'
import BackgroundImage2 from '../assets/images/staffing-1.jpg'
import BackgroundImage3 from '../assets/images/bg-4.png'

const serviceDetails = {
    'digital-manufacturing': {
        title: 'Digital Manufacturing',
        content: 'Detailed content about digital manufacturing...',
        bgImage: BackgroundImage1
    },
    'staffing-consulting': {
        title: 'Staffing & Consulting',
        content: 'Detailed content about staffing...',
        bgImage: BackgroundImage2
    },
    'lean-manufacturing': {
        title: 'Lean Manufacturing',
        content: 'Detailed content about lean manufacturing...',
        bgImage: BackgroundImage3
    }
};

export default function ServiceDetail() {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Container className=" py-5 text-white">
                <Button
                    as={Link}
                    to="/"
                    variant="light"
                    className="mb-4 d-inline-flex align-items-center"
                >
                    <ArrowLeft className="me-2" /> Back to Services
                </Button>
                <h1 className="display-2 mb-4">{service.title}</h1>
                <p className="lead fs-3">{service.content}</p>
                {/* Add more detailed content here */}
            </Container>
        </div>
    );
}
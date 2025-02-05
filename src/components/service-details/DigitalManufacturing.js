import { Card, ListGroup } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Gear, Cpu, Robot, Blueprint, Factory, Tools, Document } from 'react-bootstrap-icons';
import './DigitalManufacturing.css';
import BIWimage from '../../assets/images/bodystructure.png';
import ProcessPlanningImage from '../../assets/images/process-planning.jpg';
import FixtureDesignImage from '../../assets/images/fixture-design.jpg';
import RobotSimulationImage from '../../assets/images/robot-simulation.jpg';
import DraftingDetailingImage from '../../assets/images/lay1.PNG';
import TechnicalDocumentationImage from '../../assets/images/ergo3.PNG';

export default function DigitalManufacturing() {
    const services = [
        {
            id: 1,
            title: "Body in White Solutions",
            icon: <Gear />,
            items: [
                "Process Planning",
                "Tooling Design",
                "Robot Simulation",
                "Drafting & Detailing",
                "3D Digital Factory Design",
                "Technical Documentation"
            ],
            bgImage: BIWimage,
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 90%)"
        },

        {
            id: 2,
            title: "Fixture Design",
            icon: <Tools />,
            items: [
                "Production Tooling",
                "Gripper Design",
                "Low Cost Automation",
                "Re-Spot Fixtures",
                "MIG/MAG Welding Fixtures",
                "Conveyor Tooling"
            ],
            bgImage: FixtureDesignImage,
            clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)"
        },
        {
            id: 3,
            title: "Robot Simulation",
            icon: <Robot />,
            items: [
                "Pre-engineering Work cell",
                "Reachability Analysis",
                "Collision Detection",
                "Path Optimization",
                "Cycle Time Analysis",
                "Off-Line Programming"
            ],
            bgImage: RobotSimulationImage,
            clipPath: "polygon(0 0, 100% 10%, 95% 100%, 5% 90%)"
        },
        {
            id: 4,
            title: "Drafting & Detailing",
            icon: <Robot />,
            items: [
                "Pre-engineering Work cell",
                "Reachability Analysis",
                "Collision Detection",
                "Path Optimization",
                "Cycle Time Analysis",
                "Off-Line Programming"
            ],
            bgImage: RobotSimulationImage,
            clipPath: "polygon(0 0, 100% 10%, 95% 100%, 5% 90%)"
        },
        {
            id: 5,
            title: "Robot Simulation",
            icon: <Robot />,
            items: [
                "Pre-engineering Work cell",
                "Reachability Analysis",
                "Collision Detection",
                "Path Optimization",
                "Cycle Time Analysis",
                "Off-Line Programming"
            ],
            bgImage: RobotSimulationImage,
            clipPath: "polygon(0 0, 100% 10%, 95% 100%, 5% 90%)"
        }
    ];

    return (
        <ParallaxProvider>
            <div className="digital-manufacturing-grid">
                {services.map((service) => (
                    <Parallax
                        key={service.id}
                        y={[-20, 20]} // Moves up 20px on scroll
                        // rotate={[-5, 5]} // Rotates slightly on scroll
                    >
                        <Card
                            className="service-card"
                            style={{
                                '--bg-image': `url(${service.bgImage})`,
                                '--clip-path': service.clipPath
                            }}
                        >
                            <Parallax
                                y={[-10, 10]} // Background image moves slower
                                className="card-overlay"
                            />
                            <Card.Body>
                                <Parallax
                                    y={[-15, 15]} // Content moves faster
                                    className="icon-container"
                                >
                                    <div className="icon-wrapper">
                                        {service.icon}
                                    </div>
                                </Parallax>
                                <h2>{service.title}</h2>
                                <ListGroup>
                                    {service.items.map((item, index) => (
                                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Parallax>
                ))}
            </div>
        </ParallaxProvider>
    );
}
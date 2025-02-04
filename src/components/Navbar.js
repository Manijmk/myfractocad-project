import { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List, X } from 'react-bootstrap-icons';
import Logo from '../assets/images/factocadcover.jpg';
export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      expanded={expanded}
      fixed="top"
      className="shadow-sm px-3 py-2"
    >
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img 
            src={Logo} 
            alt="Factocad" 
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Hamburger Menu */}
        <Navbar.Toggle 
          aria-controls="main-nav" 
          onClick={() => setExpanded(expanded => !expanded)}
          className="border-0"
        >
          {expanded ? <X size={28} /> : <List size={28} />}
        </Navbar.Toggle>

        {/* Navigation Items */}
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center gap-lg-3">
            {/* Services Dropdown */}
            <Dropdown 
              as={Nav.Item} 
              onToggle={() => setExpanded(false)}
              className="px-lg-2"
            >
              <Dropdown.Toggle 
                as={Nav.Link} 
                className="d-flex align-items-center gap-1 text-dark fw-medium"
              >
                Services
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="mt-2 border-0 shadow-sm">
                <Dropdown.Item 
                  as={Link} 
                  to="/services/digital-manufacturing" 
                  className="py-2 px-3"
                  onClick={() => setExpanded(false)}
                >
                  Digital Manufacturing
                </Dropdown.Item>
                <Dropdown.Item 
                  as={Link} 
                  to="/services/staffing-consulting" 
                  className="py-2 px-3"
                  onClick={() => setExpanded(false)}
                >
                  Staffing & Consulting
                </Dropdown.Item>
                <Dropdown.Item 
                  as={Link} 
                  to="/services/lean-manufacturing" 
                  className="py-2 px-3"
                  onClick={() => setExpanded(false)}
                >
                  Lean Manufacturing
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Other Menu Items */}
            {['Career', 'Company', 'Contact Us'].map((item) => (
              <Nav.Link 
                key={item}
                as={Link} 
                to={`#${item.toLowerCase()}`} 
                className="text-dark fw-medium px-lg-2"
                onClick={() => setExpanded(false)}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
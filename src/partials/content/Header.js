import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg" className="bg-white">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Row>
              <Col>
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/portfolio">
                    PortFolio
                  </Nav.Link>
                  <Nav.Link as={Link} to="/comments">
                    Comments
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <Button variant="outline-success" style={{ display: "none" }}>
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;

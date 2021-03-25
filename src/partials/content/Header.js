import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Navbar>
              <Nav.Link className="text-xxl">Logo</Nav.Link>
            </Navbar>
          </Col>
          <Col sm={8}>
            <div>
              <Nav className="d-flex align-items-center justify-content-around">
                <Navbar>
                  <Nav.Link href="/">About</Nav.Link>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/comments">Comments</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Navbar>
              </Nav>
            </div>
          </Col>
          <Col sm={2}>
            <Button>X</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Header;

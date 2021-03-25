import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../partials/content/Header";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="section bg-dark">
        <div className="section-title">My Portfolio</div>
        <Container>
          <Row>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=1"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=2"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=3"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=4"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=5"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://picsum.photos/1024/768?random=6"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;

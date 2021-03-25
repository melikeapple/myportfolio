import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <div className="section bg-dark">
        <div className="section-title">My Portfolio</div>
        <Container>
          <Row>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
            <Col lg={4} md={6} className="pb-8">
              <img
                className="section-img w-100"
                src="https://placeimg.com/640/480/any"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};

export default Portfolio;

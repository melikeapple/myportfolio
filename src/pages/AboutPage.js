import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import Header from "../partials/content/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="section">
        <div className="section-title">About Me</div>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="img-wrapper">
                <img
                  className="image"
                  src="https://placeimg.com/640/480/any"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={6}>
              <Card as="div" className="border-0 bg-dark text-light">
                <Card.Body bsPrefix="deneme" className="py-3">
                  <Card.Title className="d-flex">
                    My name is
                    <div className="text-orange ml-2">Melike E. Mutlu.</div>
                  </Card.Title>
                  <Card.Text className="py-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Card.Text>
                  <Card.Subtitle className="d-flex text-orange py-5 pt-8 font-weight-500">
                    Name: <div className="text-light ml-2">Melike E. Mutlu</div>
                  </Card.Subtitle>
                  <Card.Subtitle className="d-flex text-orange py-5">
                    Phone: <div className="text-light ml-2">532 367 89 98</div>
                  </Card.Subtitle>
                  <Card.Subtitle className="d-flex text-orange py-5">
                    Country: <div className="text-light ml-2">Turkey</div>
                  </Card.Subtitle>
                  <Card.Subtitle className="d-flex text-orange py-5">
                    Email:
                    <a href="#" className="text-light ml-2">
                      melike@gmail.com
                    </a>
                  </Card.Subtitle>
                  <Card.Subtitle className="d-flex text-orange py-5">
                    Education:
                    <div className="text-light ml-2">
                      Çanakkale 18 Mart University
                    </div>
                  </Card.Subtitle>

                  <Card.Subtitle className="d-flex text-orange py-5">
                    Qualification:
                    <div className="text-light ml-2">Computer Programer</div>
                  </Card.Subtitle>
                  <div className="d-flex text-orange align-items-center py-3">
                    Social:
                    <TwitterIcon className="text-light mr-4 ml-4" />
                    <FacebookIcon className="text-light mr-4" />
                    <GitHubIcon className="text-light mr-4" />
                    <InstagramIcon className="text-light mr-4" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;

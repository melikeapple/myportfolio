import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const ContactPage = () => {
  return (
    <>
      <div className="section">
        <div className="section-title">Let's Talk!</div>
        <Container>
          <Row>
            <Col lg={4} md={6} className="pb-9 pb-md-0">
              <div className="text-center">
                {" "}
                <PhoneEnabledIcon
                  className="text-orange mb-3"
                  style={{ fontSize: 40 }}
                />
                <div className="text-l font-weight-bold pb-3 text-light">
                  Phone Me:
                </div>
                <div className=" font-weight-light text-light">
                  +90 532 367 89 98
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="pb-9 pb-md-0">
              <div className="text-center">
                <EmailIcon
                  className="text-orange mb-3"
                  style={{ fontSize: 40 }}
                />
                <div className="text-l font-weight-bold pb-3 text-light">
                  Email Me:
                </div>

                <div className="font-weight-light text-light">
                  melikelma@icloud.com
                </div>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <LinkedInIcon
                  className="text-orange mb-3"
                  style={{ fontSize: 40 }}
                />
                <div className="text-l font-weight-bold pb-3 text-light">
                  Follow Me:
                </div>

                <div className="font-weight-light text-light">
                  linkedin.com/in/melikemutlu
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="d-flex justify-content-center"
                style={{ paddingTop: 80 }}
              >
                <Button className="bg-orange text-center text-xl px-11">
                  Hire Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;

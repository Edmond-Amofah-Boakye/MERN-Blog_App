import React from "react";
import "../../styles/About/About.css";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../Home/Footer";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <section className="intro">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            laudantium <br /> libero esse facere in corporis voluptate molestiae
          </h1>
        </section>
        <section className="best-authors">
          <h1>BEST AUTHORS</h1>
          <Container>
            <Row>
              <Col lg={4}>
                <div className="about-content">
                  <img src="" alt="" />
                  <h4>Education</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    voluptate ullam, temporibus quae labore laborum totam
                    aperiam laboriosam magni placeat.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="about-content">
                    <img src="" alt="" />
                    <h4>Education</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                        voluptate ullam, temporibus quae labore laborum totam
                        aperiam laboriosam magni placeat.
                    </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="about-content">
                    <img src="" alt="" />
                    <h4>Education</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                        voluptate ullam, temporibus quae labore laborum totam
                        aperiam laboriosam magni placeat.
                    </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="sec-info">
            <h1>Be A Creative Blogger on your own !!</h1>
            <p>Solutions that bring development in every aspcet of life</p>
        </section>
        <section className="famous-authors">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="famous-wrp">
                            <h4>Prof. Edmond Blaise</h4>
                            <p>Germany</p>
                            <img src="images/1.jpg" alt="1" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="famous-wrp">
                            <h4>Prof. Edmond Blaise</h4>
                            <p>Germany</p>
                            <img src="images/2.jpg" alt="2" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="famous-wrp">
                            <h4>Prof. Edmond Blaise</h4>
                            <p>Germany</p>
                            <img src= "images/3.jpg" alt="3" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="footer-sec">
            <Footer />
        </section>
      </div>
    </>
  );
};

export default About;

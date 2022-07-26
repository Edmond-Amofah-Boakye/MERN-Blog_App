import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className="footer-wrapper">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="about">
                        <h1>About US</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima.
                        </p>
                        <button>Read More</button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="news-letter">
                        <h1>Signup to our newsletter</h1>
                        <div className="input-letter">
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <button>SUBMIT</button>
                        <p>we respect your privacy. No spam ever!</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div></>
  )
}

export default Footer
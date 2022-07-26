import React from 'react'
import '../../styles/Contact/Contact.css'
import { Container, Row, Col} from 'react-bootstrap'
import { AiOutlineContacts, AiOutlineMessage } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import Footer from '../../components/Home/Footer'

const Contact = () => {
  return (
    <>
        <div className="contact-wrapper">
            <section className="details">
                <Container>
                    <h1>GET IN TOUCH</h1>
                    <Row>
                        <Col md={4}>
                            <div className="detail-wrp">
                                <BiLocationPlus className='cont-icons'/>
                                <h5>ADDRESS</h5>
                                <p>STW-25-65Y Street</p>
                                <p>Ghana-Accra</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="detail-wrp">
                                <AiOutlineContacts className='cont-icons'/>
                                <h5>PHONE</h5>
                                <p>+233249300617</p>
                                <p>Ghana, Greater Accra Head Office</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="detail-wrp">
                                <AiOutlineMessage className='cont-icons'/>
                                <h5>EMAIL</h5>
                                <p>edmondboakye1622@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cont-m">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="messge-us">
                                <h4>Message Us</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> 
                                   Dignissimos enim quibusdam voluptatem error? Vel, nobis nihil , voluptate maiores doloremque perferendis.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="messge-form">
                                <form action="">
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="name">Message</label>
                                        <textarea name="" id="" cols="30" rows="7"></textarea>
                                    </div>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cont-footer">
                <Footer />
            </section>
        </div>
    </>
  )
}

export default Contact
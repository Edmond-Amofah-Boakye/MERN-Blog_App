import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { AiFillHome, AiFillContacts, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { BsInfoLg } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const style = {
  fontSize: "17px",
  marginRight: "0.4rem"
}
const Header = () => {
  return (
   <>
        <div className="header">
          <div className="message">
            <span> Welcome Back!</span>
            <Link to="/signin" className='text-links'>Sign In</Link>
          </div>
          <div className="social-media">
              <AiOutlineFacebook className='social-media-icons'/>
              <AiOutlineTwitter className='social-media-icons'/>
              <AiOutlineLinkedin className='social-media-icons'/>
              <AiOutlineInstagram className='social-media-icons'/>
          </div>
        </div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="nav--h">Blog</Navbar.Brand>
          <Nav className="auto">
            <Nav.Link href="/" className="nav--l"> <AiFillHome style={style} />Home</Nav.Link>
            <Nav.Link href="/about" className="nav--l"> <BsInfoLg /> About</Nav.Link>
            <Nav.Link href="#cats" className="nav--l"><BiCategory /> Categories</Nav.Link>
            <Nav.Link href="/contact" className="nav--l"><AiFillContacts /> Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
   </>
  )
}

export default Header
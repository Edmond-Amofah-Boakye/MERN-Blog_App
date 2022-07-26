import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsMenuButtonWide } from 'react-icons/bs'
import '../styles/Dashboard/Dashboard.css'

const Sidebar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
      <BsMenuButtonWide className='menu' onClick={handleShow}/>
     
      <Offcanvas show={show} onHide={handleClose} className="side">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="list">
            <Link to='/admin' className='list-links'>Dashboard</Link>
            <Link to='/articles' className='list-links'>Article</Link>
            <Link to='/categories' className='list-links'>Categories</Link>
            <Link to='/users' className='list-links'>Users</Link>
            <Link to='/signup' className='list-links'>Register new user</Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
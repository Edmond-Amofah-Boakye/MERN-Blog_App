import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {

    const errorpage = {
        textAlign: "center",
        margin: "2rem 0"
    }

    const linkStyle = {
        textDecoration: "none",
        color: "red"
    }
  return (
   <>
    <div className="eropage-wrp" style={errorpage}>
        <h1>Sorry, Page not found !!!</h1>
        <Link to='/' style={linkStyle}>
            Click here to the Homepage
        </Link>
    </div>
   </>
  )
}

export default ErrorPage
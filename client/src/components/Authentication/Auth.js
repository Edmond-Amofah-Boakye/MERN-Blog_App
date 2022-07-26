import React from 'react'
import {Navigate} from 'react-router-dom'

const Auth = ({children}) => {
  
  const getData = localStorage.getItem("token")

  if(!getData){
    return <Navigate to='/signin' />
  }

  return children

}

export default Auth
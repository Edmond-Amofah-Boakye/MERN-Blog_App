import React, { useState, useContext } from 'react'
import '../../styles/Signin/Signin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Store/Context'

const Signin = () => {

  const navigate = useNavigate()

  const { handleLogin } = useContext(AppContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logInData = {
    email,
    password
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const url = 'http://localhost:8000/user/login'
      const sendData = await axios.post(url, logInData)

      handleLogin(sendData)
      navigate('/admin')
     
    } catch (error) {
      alert(error.response.data.message);
    }

  }

  return (
   <>
    <div className="sign-in-wrapper">
      <div className="form-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h5>User Login</h5>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Signin
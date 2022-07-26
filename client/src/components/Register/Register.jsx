import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'
import { AppContext } from '../Store/Context'
import '../../styles/Register/Register.css'

const Register = () => {

  const { users, setUsers } = useContext(AppContext)

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userData = {fullname, email, password}

  const handleSubmit = (e) =>{
    e.preventDefault()
    const url = 'http://localhost:8000/api/user/signup'
    axios.post(url, userData)
    .then((res)=>{
      setUsers((prev)=>[...prev, res.data.newUser])
    })
    .catch((error)=>console.log(error))
  }
  return (
    <>  
    <div className="other-links">
      <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
      <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
    </div>
        <div className="register-form-d">
          <form onSubmit={handleSubmit}>
            <h4>Sign UP</h4>
            <div className="name">
              <label htmlFor="name">Fullname: <span>*</span></label>
              <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
            </div>
            <div className="email">
              <label htmlFor="email">Email: <span>*</span></label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="password">
              <label htmlFor="name">Password: <span>*</span></label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="password">
              <button>Sign UP</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default Register
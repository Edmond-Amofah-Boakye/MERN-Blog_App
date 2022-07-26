import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table } from 'react-bootstrap'
import { AiOutlineArrowRight, AiFillEdit, AiFillDelete } from "react-icons/ai"
import { AppContext } from '../Store/Context'
import axios from 'axios'

const User = () => {

    const { users, setUsers } = useContext(AppContext)

    const handleUserDelete = (id) =>{
        const url = `http://localhost:8000/api/user/${id}`
        axios.delete(url, {headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }})
        .then((res)=>{
            setUsers(users.filter((e)=> e._id !== id))
        })
        .catch((error)=>console.log(error))
    }

    const user = users.map((sUser, index)=>{
        return(
          <tr key={sUser._id}>
            <td>{index}</td>
            <td>{sUser.fullname}</td>
            <td>{sUser.email}</td>
            <td>{sUser.facebook}</td>
            <td>{sUser.twitter}</td>
            <td>{sUser.linkden}</td>
            <td><Link to={`/users/edit/${sUser._id}`}><AiFillEdit /></Link></td>
            <td><AiFillDelete onClick={()=>handleUserDelete(sUser._id)}/></td>
            </tr>
        )
      })


  return (
    <>
        <div className="other-links">
      <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
      <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
    </div>
    <Container fluid>
      <div className="category-head">
        <h1>All Users</h1>
      </div>
      <div className="category-btn">
        <button><Link to="/signup" className="addcat">Add New User</Link></button>
      </div>
      <div className="table-wrapper">
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Facebook</th>
              <th>Twitter</th>
              <th>Linkden</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user}
          </tbody>
        </Table>
      </div>
    </Container>
    </>
  )
}

export default User
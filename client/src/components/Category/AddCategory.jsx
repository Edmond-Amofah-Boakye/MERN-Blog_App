import "../../styles/Category/Category.css";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

const AddCategory = () => {

  const [name, setCategoryName] = useState("")
  const [image, setCategoryImage] = useState(null)
  
  const handleSubmitData = async(e)=>{
    
    e.preventDefault()
    
    const formData = new FormData()
  
    formData.append("name", name)
    formData.append("image", image)

      
      const url = 'http://localhost:8000/api/category'
      
      axios.post(url, formData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}})
      .then((data)=>{
        console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      })
      

  
  }



  return (
    <>
    <div className="other-links">
        <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
        <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
      </div>
      <Container fluid>
        <div className="category-head">
          <h1>Create A Category</h1>
        </div>
        <div className="form">
            <form onSubmit={handleSubmitData}>
                <div className="cat-name">
                    <label htmlFor="name">Category Name:</label>
                    <input type="text" required value={name} onChange={(e)=>setCategoryName(e.target.value)}/>
                </div>
                <div className="cat-image">
                    <label htmlFor="image">Category Image:</label>
                    <input type="file" required onChange={(e)=>setCategoryImage(e.target.files[0])}/>
                </div>
                <button>ADD</button>
            </form>
        </div>
      </Container>
    </>
  )
}

export default AddCategory
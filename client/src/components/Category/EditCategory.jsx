import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"
import axios from 'axios'

const EditCategory = () => {

  const id = useParams().id

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const formData = new FormData()
  formData.append('name', name)
  formData.append('image', image)

  useEffect(() => {
    const url = `http://localhost:8000/api/category/${id}`
    axios.get(url)
    .then((res)=>{
      setName(res.data.category.name)
      setImage(res.data.category.image)
    })
    .catch((error)=> console.log(error))
  }, [id])
  

  const handleEdit = (e) =>{
    e.preventDefault()
    const url = `http://localhost:8000/api/category/${id}`
    
    axios.put(url, formData, {headers:{
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }})
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  }

  





  return (
    <>
      <div className="other-links">
        <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
        <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
      </div>
      <Container fluid>
        <div className="category-head">
          <h1>Edit A Category</h1>
        </div>
        <div className="form">
            <form onSubmit={handleEdit}>
                <div className="cat-name">
                    <label htmlFor="name">Category Name:</label>
                    <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="cat-image">
                    <label htmlFor="image">Category Image:</label>
                    <input type="file" filename={image} onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <button>Edit</button>
            </form>
        </div>
      </Container>
    </>
  )
}

export default EditCategory
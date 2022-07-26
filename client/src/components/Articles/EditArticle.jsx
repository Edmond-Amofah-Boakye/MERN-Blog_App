import "../../styles/Category/Category.css";
import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams  } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { AiOutlineArrowRight  } from 'react-icons/ai'
import '../../styles/Articles/Article.css'
import { AppContext } from '../Store/Context'
import axios from "axios";

const EditArticle = () => {
    const id = useParams().id

    const { allCategory } = useContext(AppContext)

    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")

  useEffect(() => {
    const url = `http://localhost:8000/api/article/${id}`
    axios.get(url)
    .then((res)=>{
      setTitle(res.data.singleArticles.title)
      setContent(res.data.singleArticles.content)
      setImage(res.data.singleArticles.image)
      setCategory(res.data.singleArticles.category)
    }).catch((error)=>console.log(error))
  }, [id])
  
  const formData = new FormData()
  formData.append('title', title)
  formData.append('image', image)
  formData.append('content', content)
  formData.append('category', category)

  const handleEdit = (e) =>{
    e.preventDefault()

    const url = `http://localhost:8000/api/article/${id}`

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
          <h1>Edit An Article</h1>
        </div>
        <div className="form-article">
            <form onSubmit={handleEdit}>
                <div className="cat-title">
                    <label htmlFor="title">Title:</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="cat-content">
                    <label htmlFor="content">Content:</label>
                    <textarea value={content} cols="30" rows="10" onChange={(e)=>setContent(e.target.value)} />
                </div>
                <div className="cat">
                    <label htmlFor="cat">Category:</label>
                    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                      {allCategory.map((data)=><option key={data._id} value={data.name}>{data.name}</option>)}
                    </select>
                </div>
                <div className="cat-image">
                    <label htmlFor="content">Article Image:</label>
                    <input type="file" required filename={image} onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <button>EDIT</button>
            </form>
        </div>
      </Container>
    </>
  )
}

export default EditArticle
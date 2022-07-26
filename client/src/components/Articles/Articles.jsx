import "../../styles/Category/Category.css";
import React, { useContext } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit, AiOutlineArrowRight } from 'react-icons/ai'
import { AppContext } from "../Store/Context";
import axios from "axios"

const Articles = () => {

  const { articles, setArticles } = useContext(AppContext)

  const handleArticleDelete = async(id) =>{

    const url = `http://localhost:8000/api/article/${id}`

      try {
          await axios.delete(url, {headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`}
          })

          setArticles(
            articles.filter((e)=> e._id !== id)
          )

      } catch (error) {
        console.log(error);
      }
  }

  const allArticles = articles.map((art, index)=>{
    return(
      <tr key={art._id}>
        <td>{index}</td>
        <td>{art.title}</td>
        <td>{art.createdAt}</td>
        <td>{art.category}</td>
        {/* <td>{art.createdBy.fullname}</td> */}
        <td><Link to={`/article/edit/${art._id}`}><AiFillEdit /></Link></td>
        <td><AiFillDelete onClick={()=>handleArticleDelete(art._id)}/></td>
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
        <h1>All Articles</h1>
      </div>
      <div className="category-btn">
        <button><Link to="/addarticles" className="addcat">Add Article</Link></button>
      </div>
      <div className="table-wrapper">
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Created Time</th>
              <th>Category</th>
              <th>Author</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allArticles}
          </tbody>
        </Table>
      </div>
    </Container>
  </>
  )
}

export default Articles
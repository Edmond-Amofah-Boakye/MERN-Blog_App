import "../../styles/Category/Category.css";
import React, { useContext } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit, AiOutlineArrowRight } from 'react-icons/ai'
import { AppContext } from '../Store/Context'
import axios from "axios";

const Category = () => {

  const { allCategory, setCategory } = useContext(AppContext)

  const handleDelete = async(id) =>{

    const url = `http://localhost:8000/api/category/${id}`;

    try {
      await axios.delete(url, {headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }})
      
      setCategory(
        allCategory.filter((filt)=> filt._id !== id)
      )

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="other-links">
        <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
        <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
      </div>
      <Container>
        <div className="category-head">
          <h1>All Categories</h1>
        </div>
        <div className="category-btn">
          <button><Link to="/addcategory" className="addcat">Add Category</Link></button>
        </div>
        <div className="table-wrapper">
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            {allCategory.map((data, index)=>{
              return(
                    <tbody key={data._id}>
                      <tr>
                        <td>{index}</td>
                        <td>{data.name}</td>
                        <td className="photo"><img src={`//localhost:8000/${data.image}`} alt="" /></td>
                        <td><Link to={`/category/edit/${data._id}`}><AiFillEdit /></Link></td>
                        <td><AiFillDelete onClick={()=>handleDelete(data._id)}/></td>
                      </tr>
                    </tbody>
              )
            })}
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Articles/SingleArticle.css";
import Comments from "../Comments/Comments";
import Footer from "../Home/Footer";
import { useParams } from 'react-router-dom'
import axios from "axios";

const SingleArticlePage = () => {
  const [singlePost, setSinglePost] = useState({})
  const [singleAuthor, setSingleAuthor] = useState({})
  const [comments, setComments] = useState([])

  const id = useParams().id


    useEffect(() => {
      const url = `http://localhost:8000/api/article/${id}`

      axios.get(url)
      .then((res)=>{
        setSinglePost(res.data.singleArticles)
        setSingleAuthor(res.data.singleArticles.createdBy)
        setComments(res.data.singleArticles.comments)
      })
      .catch((error)=>console.log(error))

    }, [id])
    
  return (
    <>
      <Container fluid className="wrapper">
        <Row>
          <Col md={9} className='rw-1'>
            <div className="art-img">
              <img src={`//localhost:8000/${singlePost.image}`} alt="text" />
            </div>
            <h1>{singlePost.title}</h1>
            <div className="auth-date">
              <h4>{singlePost.fullname}</h4>
              <h4>24/03/2021</h4>
            </div>
            <p>{singlePost.content}</p>
          </Col>

          <Col md={3} className='rw-2'>
            <hr />
            <h1>Author</h1>
            <hr />
            <div className="auth-img">
              {/* <img src={`//localhost:8000/${singleAuthor.image}`} alt="test" /> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus minus est, odio repellendus sint nam itaque alias atque.
            </p>
          </Col>
        </Row>
        <Comments postid={singlePost._id} comments={comments} setComments={setComments}/>
      </Container>
      <Footer />
    </>
  );
};

export default SingleArticlePage;


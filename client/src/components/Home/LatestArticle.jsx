import React, { useContext } from 'react'
import { Container, Row, Col} from "react-bootstrap"
import { AppContext } from '../Store/Context'
import { Link } from 'react-router-dom'

const LatestArticle = () => {

    const styles = {
        textDecoration: "none",
        color: "white"
    }

    const { articles } = useContext(AppContext)

    console.log(articles);
 
    const article = articles.map((art)=>{
        return (
            <Col md={4} lg={4} key={art._id}>
                    <div className="article-content">
                        <div className="article-image">
                        <img src={`http://localhost:8000/${art.image}`} alt={art._id} />
                        </div>
                        <div className="article-header">
                            <h4>{art.category}</h4>
                            <h6>20/03/2022</h6>
                        </div>
                        <div className="article-para">
                            <p>{art.title}</p>
                        </div>
                        <button><Link to={`/articles/${art._id}`} style={styles}>Read More</Link></button>
                    </div>
                </Col>
        )
    })

  return (
    <>
    <div className="article-head">
        <h1>LATEST ARTICLES</h1>
        <Container>
            <Row>
               {article}
            </Row>
        </Container>
    </div>
    </>
  )
}

export default LatestArticle
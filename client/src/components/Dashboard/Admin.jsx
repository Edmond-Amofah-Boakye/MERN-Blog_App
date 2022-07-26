import React, { useContext } from 'react'
import { AppContext } from '../Store/Context'
import '../../styles/Admin/Admin.css'
import { Container, Row, Col} from 'react-bootstrap'
import { AiOutlineArrowRight, AiFillFolderOpen } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Admin = () => {

    const { allCategory, articles, users} = useContext(AppContext)

  return (
    <>
    <div className="admin-wrp">
        <Container>
            <h1>Hello Admin !</h1>
            <div className="other-links">
                <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
                <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
            </div>
            <div className="add-head"><p>Welcome to your Admin Dashboard!!</p></div>
            <Row>
                <Col md={6} lg={4}>
                    <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Articles</h3>
                                <h5>{articles.length}</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>

                <Col md={6} lg={4}>
                    <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Categories</h3>
                                <h5>{allCategory.length}</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>

                <Col md={6} lg={4}>
                   <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Comments</h3>
                                <h5>170</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>

                <Col md={6} lg={4}>
                   <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Users</h3>
                                <h5>{users.length}</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                   <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Messages</h3>
                                <h5>25</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                   <div className="card">
                        <div className="card-details">
                            <div><AiFillFolderOpen className='card-icon'/></div>
                            <div>
                                <h3>Events</h3>
                                <h5>5</h5>
                            </div>
                        </div>
                        <div className="card-view">
                            <div><p>view</p></div>
                            <div><AiOutlineArrowRight className='view-icon' /></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Admin
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../Store/Context'


const Categories = () => {

  const { allCategory } = useContext(AppContext)

  const cat = allCategory.map((data)=>{
    return(
      <span key={data._id}>
        <Link to={`/${data._id}`} className='link-styles'>{data.name}</Link>
      </span>
    )
  })
  
  return (
    <>
    <Container>
       <h4 className='cat-h'>Categories</h4>
        <div className="category-wrapper">
          {cat}
       </div>
    </Container>
    </>
  )
}

export default Categories
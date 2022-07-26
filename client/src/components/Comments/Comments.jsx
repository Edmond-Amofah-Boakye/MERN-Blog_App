import React, { useState } from 'react'
import '../../styles/Comments/Comments.css'
import axios from 'axios';

const Comments = ({postid, comments, setComments}) => {
    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const commentsData = {name, content}

    const handleSubmitComment = async(e)=>{

        e.preventDefault()

        const url = `http://localhost:8000/api/comments/${postid}`

        const response = await axios.post(url, commentsData) 
        setComments((prev)=> [...prev, response.data.comments])
        setName("")
        setContent("")
    }

  return (
    <>
    <div className="allcomments">
        <h4>All Comments</h4>
        <ul>
            {comments.map((comm)=>{
                return(
                    <li key={comm._id}>
                        <span className='name'>{comm.name}:</span>
                        <span>{comm.content}</span>
                    </li>
                )
            })}
        </ul>
    </div>
    <div className="comment-wrapper">
        <h4>Add A Comment</h4>
        <form onSubmit={handleSubmitComment}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="comment">Comment</label>
            <textarea cols="30" rows="4" value={content} onChange={(e)=>setContent(e.target.value)}/>
            <button>Add</button>
        </form>
    </div>
    </>
  )
}

export default Comments
import '../../styles/Register/RegisterEdit.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

const EditUser = () => {
    const id = useParams().id

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [linkden, setLinkden] = useState("")

    useEffect(() => {
        const url = `http://localhost:8000/api/user/${id}`
        axios.get(url, {headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }})
        .then((res)=>{
            setFullname(res.data.user.fullname)
            setEmail(res.data.user.email)
            setImage(res.data.user.image)
            setFacebook(res.data.user.facebook)
            setTwitter(res.data.user.twitter)
            setLinkden(res.data.user.linkden)
        })
        .catch((error)=>console.log(error))
    }, [id])

    const formData = new FormData()
    formData.append('fullname', fullname)
    formData.append('email', email)
    formData.append('image', image)
    formData.append('facebook', facebook)
    formData.append('twitter', twitter)
    formData.append('linkden', linkden)



    
    const handleEdit = (e) =>{
        e.preventDefault()
        const url = `http://localhost:8000/api/user/${id}`
        axios.put(url, formData, {headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }})
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
    }

  return (
    <>
        <div className="other-links">
      <AiOutlineArrowRight /> <Link to='/admin' className="li-links">Dashboard</Link>
      <AiOutlineArrowRight /> <Link to='/' className="li-links">Website</Link>
    </div>
        <div className="register-form">
          <form onSubmit={handleEdit}>
            <div className="first-sect">
            <h4>Edit User</h4>
            <div className="name">
              <label htmlFor="name">Fullname: <span>*</span></label>
              <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
            </div>
            <div className="email">
              <label htmlFor="email">Email: <span>*</span></label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="facebook">
              <label htmlFor="facebook">Facebook: <span>*</span></label>
              <input type="text" value={facebook} onChange={(e)=>setFacebook(e.target.value)}/>
            </div>
            <div className="twitter">
              <label htmlFor="twitter">Twitter Handle: <span>*</span></label>
              <input type="text" value={twitter} onChange={(e)=>setTwitter(e.target.value)}/>
            </div>
            <div className="linkden">
              <label htmlFor="linkden">Linkden: <span>*</span></label>
              <input type="text" value={linkden} onChange={(e)=>setLinkden(e.target.value)}/>
            </div>
            <div className="password">
              <button>Edit</button>
            </div>
            </div>

            <div className="sec-part">
                <div className="photo">
                <label htmlFor="name">Update Profile Picture: <span>*</span></label>
                <input type="file" filename={image} onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default EditUser
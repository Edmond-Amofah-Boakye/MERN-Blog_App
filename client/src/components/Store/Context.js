import React, { createContext , useEffect,useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const Context = ({children}) => {

    const initialToken = localStorage.getItem("token")

    const [allCategory, setCategory] = useState([])
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])
    const [getToken, setToken] = useState(initialToken)

    const isLoggedIn = !!getToken

    const handleLogin = (sendData)=>{
      const token = sendData.data.token
      localStorage.setItem("token", token)
      setToken(token)
    }

    useEffect(() => {
      const url = 'http://localhost:8000/api/category'
      axios.get(url)
      .then((res)=>setCategory(res.data.category))
      .catch((error)=>console.log(error))
    }, [])


    useEffect(() => {
      const url = 'http://localhost:8000/api/article'
      axios.get(url)
      .then((res)=>setArticles(res.data.articles))
      .catch((error)=>console.log(error))
    }, [])

    
   
    useEffect(() => {
      const url = 'http://localhost:8000/api/user'
      axios.get(url, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}})
      .then((res)=>setUsers(res.data.user))
      .catch((error)=>console.log(error))
    }, [])
    
    

    
   
  return (
   
    <AppContext.Provider value={{isLoggedIn, allCategory, articles, handleLogin, users, setArticles, getToken, setCategory, setUsers}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SinglePages = () => {
    const data=useParams()
    const[blogs,SetBlog]=useState({})

     async function fetchSingleData(){
        const response=await axios.get("https://687af384abb83744b7ee48c9.mockapi.io/Blogs/" + data.id)
        if(response.status==200)
        {
          SetBlog(response.data)
        }
        else{
           alert('Error Occured..')
        }
    }

    useEffect(()=>{
      fetchSingleData()
    },[])

      const navigate=useNavigate()

      async function deleteblog()
  {
 const response =await axios.delete("https://687af384abb83744b7ee48c9.mockapi.io/Blogs/"+ data.id)
 if(response.status==200)
 {
  navigate("/")

  }
  else{
    alert('error occured')
  }
}
 

  return (
<>

      <img src={blogs.image} alt=""></img>
      <h1>{blogs.title}</h1>
      <h3>{blogs.subtitle}</h3>
      <p>{blogs.description}</p>
      <p>{blogs.createdAt}</p>
      <Link to={'/edit'+ blogs.id}> <button className='bg-green-500 text-white mx-4 '>Edit me </button></Link>

      <button onClick={deleteblog} className="bg-blue-500 text-white"> Delete</button>
      
</>

  )
}

export default SinglePages
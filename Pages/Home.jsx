import React, { useEffect } from 'react'
import Cards from '../Components/Cards'
import { useState } from 'react'
import axios from 'axios'
const Home = () => {
  const[blogs,Setblogs]=useState([])
   async function fetchBlogs()
  {
 const response =await axios.get("https://687af384abb83744b7ee48c9.mockapi.io/Blogs")
 if(response.status==200)
 {
  
Setblogs(response.data)
  }
  else{
    alert('error occured')
  }
}
  useEffect(function (){
fetchBlogs()

  },[])
  console.log(blogs,"this is a blog ")

  return (
   
  <>
 <div className='flex flex-wrap gap-1.5'>

  {blogs.map(function(blog){
    return(    
      <Cards 
      key={blog.id} hello={blog} />
    )
  }
  

)}
 </div>
 </>
  )
}
export default Home
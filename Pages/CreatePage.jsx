import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatePage = () => {
   const [title,setTitle]=useState("")
    const [subtitle,setSubTitle]=useState("")
    const [description,setDescription]=useState("")
    const[image,setImage]=useState("")
    const navigate=useNavigate()

  async function sentDataToBackend(e){
    e.preventDefault()
   const response = await axios.post("https://687af384abb83744b7ee48c9.mockapi.io/Blogs/",{


    title:title,
    subtitle:subtitle,
    description:description,
    image:image
 
  })
  if(response.status ==201){
    navigate('/')

  }
  else{
    alert('error')
  }
 }

   
  return (
<>
<div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-3 text-center text-4xl font-bold">create a blog</div>
  <form  onSubmit={sentDataToBackend} className="p-8">
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter the title"  onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter the subtitle" onChange={(e)=>setSubTitle(e.target.value)} />
    </div>

  <input type="text" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter url"  onChange={(e)=>setImage(e.target.value)}/>
    <div className>
      <textarea name="description" id="" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" defaultValue={"Message"}  onchange={(e)=>setDescription(e.target.value)}/>
    </div>
    <button  className='text-center bg-red-600 rounded-xl text-white ' type="submit">Submit Now</button>
    
  </form>
</div>

</>
  )
}

export default CreatePage
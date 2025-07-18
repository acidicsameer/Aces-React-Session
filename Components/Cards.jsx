import React from 'react'

const Cards = () => {
  return (
        <div className=' mt-6 bg-black rounded-4xl w-[400px] h-[400px] shadow-2xl    '>
 <div className=''><img  className='h-[300px]  p-6    w-[400px]   rounded-4xl' src="https://th.bing.com/th/id/OIP.xiLk6II7SS7bLC-CXwSykwHaE8?w=280&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" /></div>
     
      <div className='text-3xl  text-blue-300  font-bold text-center  '> Hamro jutta pasal </div>
      <div className='flex justify-between p-4'>
        <div className='text-white  font-bold  bg-green-700  rounded-2xl  p-1'>Rs:100</div>
        <div className=' text-white font-bold  bg-green-700  rounded-2xl p-1'>Stock:22</div>
      

    </div>
    </div>
  )
}

export default Cards
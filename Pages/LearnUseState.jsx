import React, { useState } from 'react'

const LearnUseState = () => {
    
    // let counter=0
    const[counter,Setcounter]=useState(0)

    function increaseCounter(){
// counter++;
Setcounter(counter+1)
    }
    function decreaseCounter(){
        if(counter>0)
        {
        
    // counter--;
    Setcounter(counter-1)
        }
    }
  return (
    <>
<div className='bg-yellow-200 w-[300px] h-[150px] flex flex-col items-center mt-6 ml-6  rounded-4xl'>
    <div className=' text-blue-600 text-3xl font-bold '>LearnUseState</div>
    <div className='bg-white text-center text-2xl font-extrabold '>{counter}</div>
    <div className='flex text-center justify-center mt-4'>
  <button onClick={increaseCounter} className='bg-black h-[50px] w-[50px] text-2xl text-white text-center '> +</button>
  <button onClick={decreaseCounter}   className='bg-black h-[50px] w-[50px] text-2xl text-white text-center ml-4 '>-</button>
</div>
</div></>
  )
}

export default LearnUseState

import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
import { useNavigate, useParams } from 'react-router-dom'
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
<div className="py-16 bg-gray-50 lg:py-24" id="pricing">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl fade-in">
        One Plan, <span className="text-red-600">{blogs.id}</span>
      </h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 sm:text-xl fade-in" style={{animationDelay: '0.2s'}}>
  {blogs.description}
      </p>
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="gradient-border fade-in" style={{animationDelay: '0.3s'}}>
        <div className="inner-card relative overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1.5">
          <div className="absolute top-0 right-0 -mt-px">
            <div className="flex items-center h-8 px-4 font-semibold text-white bg-red-500 rounded-bl-lg rounded-tr-xl">
              Best Value
            </div>
          </div>
          <div className="p-8 lg:flex lg:items-start lg:space-x-8">
            <div className="mb-8 text-center lg:w-2/5 lg:text-left lg:mb-0">
              <h3 className="mb-2 text-3xl font-bold text-gray-800">Reddit Lead Master</h3>
              <p className="mb-6 text-gray-600">{blogs.subtitle}</p>
              <div className="flex items-baseline justify-center mb-4 lg:justify-start">
                <span className="text-5xl font-extrabold text-gray-800">$7</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <p className="inline-block px-4 py-2 mb-8 text-sm font-semibold text-red-700 bg-red-100 rounded-full">
                10 Day Free Trial
              </p>
              <a href="https://reddradar.com/auth/login?redirect_to=https%3A%2F%2Freddradar.com%2Fpayments%2Fpdt_2YnpTARifwkVpT9LgOjin%2Fredirect" className="block w-full px-8 py-4 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-red-500 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:shadow-xl hover:scale-105">
                Start Your Free Trial
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Cancel anytime
              </p>
            </div>
            <div className="lg:w-3/5">
              <h4 className="hidden mb-6 text-xl font-semibold text-gray-800 lg:block">What's Included:</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">1 Project Support + Add-on
                      Capability</span>
                    <p className="text-sm text-gray-600">Start with one project, easily add more as you
                      need</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Save Hours of Work</span>
                    <p className="text-sm text-gray-600">Automated lead discovery and AI-powered
                      insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Get Only Quality Leads</span>
                    <p className="text-sm text-gray-600">Advanced filtering ensures high-converting
                      prospects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">400+ Top Subreddits Monitored</span>
                    <p className="text-sm text-gray-600">Growing database of the most valuable
                      communities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Instant Notification Alerts</span>
                    <p className="text-sm text-gray-600">Real-time alerts via email and Slack
                      integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Dedicated Email Support</span>
                    <p className="text-sm text-gray-600">Priority support to help you succeed</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <button  onClick={deleteblog} className='bg-red-700 text-white '>Delete me </button>

</>

  )
}

export default SinglePages
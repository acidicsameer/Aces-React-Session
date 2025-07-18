import React from 'react'

const SinglePages = () => {
  return (
<>
  <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-md w-full">
    <h1 className="text-4xl font-extrabold text-center mb-8 neon-text">Extreme Signup</h1>
    <form className="space-y-6">
      <div className="relative">
        <input type="text" placeholder="Username" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300" />
        <i className="fas fa-user absolute right-3 top-3 text-pink-500" />
      </div>
      <div className="relative">
        <input type="email" placeholder="Email" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300" />
        <i className="fas fa-envelope absolute right-3 top-3 text-pink-500" />
      </div>
      <div className="relative">
        <input type="password" placeholder="Password" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300" />
        <i className="fas fa-lock absolute right-3 top-3 text-pink-500" />
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
        Sign Up
      </button>
    </form>
    <div className="mt-8 text-center">
      <p className="text-gray-400">Or sign up with</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><i className="fab fa-facebook-f text-2xl" /></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transform hover:scale-125 transition-all duration-300"><i className="fab fa-twitter text-2xl" /></a>
        <a href="#" className="text-red-500 hover:text-red-600 transform hover:scale-125 transition-all duration-300"><i className="fab fa-google text-2xl" /></a>
      </div>
    </div>
  </div>
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <i className="fas fa-meteor text-yellow-500 text-4xl absolute animate-ping" style={{top: '10%', left: '5%'}} />
    <i className="fas fa-star text-blue-500 text-2xl absolute animate-pulse" style={{top: '20%', right: '10%'}} />
    <i className="fas fa-rocket text-red-500 text-5xl absolute float" style={{bottom: '15%', left: '15%'}} />
    <i className="fas fa-planet-ringed text-purple-500 text-6xl absolute rotate" style={{top: '40%', right: '20%'}} />
  </div>

</>

  )
}

export default SinglePages
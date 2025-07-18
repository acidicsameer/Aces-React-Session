import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Navbar from './Components/Navbar'

import SinglePages from './Pages/SinglePages'
import LearnUseState from './Pages/LearnUseState'
const App = () => {
  
  return (
   
    <>
  
    <BrowserRouter>
   <Navbar />
    <Routes>
      <Route  path='/' element={  <Home />}/>
      <Route  path='/edit' element={<Edit />} />
      <Route path='/about'  element={ <About />}/>
    
        <Route path='/blog'  element={ <Blog />}/>
          <Route path='/single'  element={ <SinglePages />}/>
          
          <Route path='/learnusestate'  element={ <LearnUseState />}/>
      </Routes>
      </BrowserRouter>
      </>)
}

export default App
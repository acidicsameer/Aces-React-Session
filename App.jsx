import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Navbar from './Components/Navbar'

import SinglePages from './Pages/SinglePages'
import LearnUseState from './Pages/LearnUseState'
import CreatePage from './Pages/CreatePage'
const App = () => {
  
  return (
   
    <>
  
    <BrowserRouter>
   <Navbar />
    <Routes>
      <Route  path='/' element={  <Home />}/>
      <Route  path='/edit/:id' element={<Edit />} />
      <Route path='/about'  element={ <About />}/>
    
        <Route path='/blog'  element={ <Blog />}/>
        {/* harek  id ma vako single  page haru ma jana sakiyo /:id lekhepar  */}
          <Route path='/single/:id'  element={ <SinglePages />}/>  
          
          <Route path='/learnusestate'  element={ <LearnUseState />}/>
          <Route path='/create'  element={ <CreatePage />}/>
      </Routes>
      </BrowserRouter>
      </>)
}

export default App
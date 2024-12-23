import React from 'react'
import './App.css'
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Gallery from './pages/Gallery'
import BookNowForm from './pages/BookNowForm'
import TravelPackages from './packages/TravelPackages'

function App() {
  return (
       <div className="container">
        <Router>
        <NavBar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/destinations'element={<Destinations/>}/>
          <Route path='/packages'element={<TravelPackages/>}/>
          <Route path='/gallery'element={<Gallery/>}/>
          <Route path='/booknowform'element={<BookNowForm/>}/>
        </Routes>
      </Router>
     
       </div>
      
    
  )
}

export default App
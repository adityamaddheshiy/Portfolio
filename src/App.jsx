import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import Project from './pages/Project'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skill' element={<Skill />} />
      </Routes>

    </div>
  )
}

export default App

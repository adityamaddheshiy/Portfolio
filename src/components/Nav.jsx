import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <h3>Protfolio</h3>
        <div className='link'>
            <Link  to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='skill'>Skill</Link>
            <Link to='project'>Project</Link>
        </div>
    </div>
  )
}

export default Nav

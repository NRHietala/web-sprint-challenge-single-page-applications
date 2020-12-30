import React from 'react'
import { Link } from 'react-router-dom';



function Header() {



  return (
    <div>
      <Link to="/"><h1><span role='img' alt="castle">🏰</span> Nate's Pizza Palace <span role='img' alt='castle'>🏰</span></h1></Link> 
    </div>
  )
}

export default Header

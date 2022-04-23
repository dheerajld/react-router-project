import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
    
   
    <Link className="navbar-brand" to="/">Dhiraj</Link>
    
  
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">User</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Todos">Todos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Posts">Posts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Photos">Photos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Comments">Comments</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Albums">Albums</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Registration">Registration</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/Login">Login</Link>
        </li>
        
      
      </ul>
    
    </div>
  </nav>
  
  )
}

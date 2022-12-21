import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const sidenav = () => {
  return (
    <nav className='Sidenav'>
     <ul>
     <li className='Dashboard'>
      <Link className='nav-link1' to={"/Home"}>Dashboard </Link> 
      </li> 
     <li className='Issue'> 
     <Link className='nav-link2' to ={"/Issue"}>Issue</Link>
     </li>
     <li className='Create'> 
     <Link className='nav-link3' to ={"/Create"}>Create</Link>
     </li>
     </ul>
     </nav>



    
  )
}

export default sidenav
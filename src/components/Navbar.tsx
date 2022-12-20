import React from 'react'
import "./style.css";
import {TbBellRinging2} from 'react-icons/tb'
import {AiOutlineUser} from 'react-icons/ai'


const navbar: React.FC<{}>  = () => {
  return (
    <nav className='Navbar'>
       <img src="Logo.svg" className= 'logo' alt='s' />
       <form className='headingnav'>tracker</form>
       <form className="search">
        <input type="input" placeholder='Search' className='search__box'></input>
        <form className='notification'><TbBellRinging2/></form>
        <form className='user'><AiOutlineUser/></form>
        
    </form>
      
    
    </nav>
  )
}

export default navbar
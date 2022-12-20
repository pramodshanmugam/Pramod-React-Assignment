import React from 'react'
import "./style.css";


const navbar: React.FC<{}>  = () => {
  return (
    <nav className='Navbar'>
       <img src="Logo.svg" className= 'logo' alt='s' />
       <form className='headingnav'>tracker</form>
       <form className="search">
        <input type="input" placeholder='Search' className='search__box'></input>
        
    </form>
      
    
    </nav>
  )
}

export default navbar
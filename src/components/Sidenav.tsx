import React from 'react'
import "./style.css";

const sidenav = () => {
  return (
    <nav className='Sidenav'>
     <div className='button1'><button>Dashboard</button></div>
     <div className='button2'><button>Issues</button></div><br/>
     <div className='button3'><button>Create</button></div><br/>
     </nav>
  )
}

export default sidenav